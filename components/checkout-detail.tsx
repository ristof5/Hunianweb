import { getReservationById } from "@/lib/data";
import { formatCurrency, formatDate } from "@/lib/utils";
import { differenceInCalendarDays } from "date-fns";
import Image from "next/image";
import React from "react";
import PaymentButton from "@/components/payment-button";

const CheckoutDetail = async ({ reservationId }: { reservationId: string }) => {
  const reservation = await getReservationById(reservationId);
  if (!reservation || !reservation.Payment || reservation.Payment.length === 0)
    return <h1>No Reservation Found</h1>;

  const duration = differenceInCalendarDays(
    reservation.endDate,
    reservation.startDate
  );

  return (
    <div className="grid md:grid-cols-2 gap-5">
      <div className="order-2">
        <div className="flex flex-col mb-3 items-start bg-white border border-rose-200 rounded-sm md:flex-row md:w-full">
          <div className="aspect-video relative">
            <Image
              src={reservation.Room.image}
              width={500}
              height={300}
              className="object-cover w-full rounded-t-sm aspect-video md:rounded-none md:rounded-s-sm"
              alt="image"
            />
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal w-full">
            <h5 className="mb-1 text-4xl font-bold tracking-tight text-gray-900">
              {reservation.Room.name}
            </h5>
            <div className="flex items-center gap-1 text-2xl text-gray-700">
              <div className="flex items-center justify-center gap-1">
                <span className="text-2xl">{formatCurrency(reservation.price)}</span>
                <span>/ Night</span>
              </div>
            </div>
          </div>
        </div>
        {/* payment */}
        <PaymentButton reservation={reservation}/>
      </div>
      <div className="border border-gray-200 px-3 py-5 bg-white rounded-sm">
        <table className="w-full text-sm">
          <tbody>
            <tr>
              <td className="py-2 text-gray-800 font-medium">Reservation ID</td>
              <td className="py-2 text-right truncate text-gray-900">
                #{reservation.id}
              </td>
            </tr>
            <tr>
              <td className="py-2 text-gray-800 font-medium">Name</td>
              <td className="py-2 text-right truncate text-gray-900">
                {reservation.User.name}
              </td>
            </tr>
            <tr>
              <td className="py-2 text-gray-800 font-medium">Email</td>
              <td className="py-2 text-right truncate text-gray-900">
                {reservation.User.email}
              </td>
            </tr>
            <tr>
              <td className="py-2 text-gray-800 font-medium">Phone Number</td>
              <td className="py-2 text-right truncate text-gray-900">
                {reservation.User.phone}
              </td>
            </tr>
            <tr>
              <td className="py-2 text-gray-800 font-medium">Arrival</td>
              <td className="py-2 text-right truncate text-gray-900">
                {formatDate(reservation.startDate.toISOString())}
              </td>
            </tr>
            <tr>
              <td className="py-2 text-gray-800 font-medium">Departure</td>
              <td className="py-2 text-right truncate text-gray-900">
                {formatDate(reservation.endDate.toISOString())}
              </td>
            </tr>
            <tr>
              <td className="py-2 text-gray-800 font-medium">Duration</td>
              <td className="py-2 text-right truncate text-gray-900">
                <span>
                  {duration} {duration <= 1 ? "Night" : "Nights"}
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-2 text-gray-800 font-medium">
                Amount In Rupiah
              </td>
              <td className="py-2 text-right truncate text-gray-900 font-semibold">
                {formatCurrency(reservation.Payment[0]?.amount)}
              </td>
            </tr>
            <tr>
              <td className="py-2 text-gray-800 font-medium">Status</td>
              <td className="py-2 text-right truncate">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    reservation.Payment[0]?.status === "PAID"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {reservation.Payment[0]?.status}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CheckoutDetail;
