import Image from "next/image";
import { getReservationByUserId } from "@/lib/data";
import React from "react";
import { notFound } from "next/navigation";
import { formatCurrency, formatDate } from "@/lib/utils";
import { differenceInCalendarDays } from "date-fns";
import Link from "next/link";

type Room = {
  image: string;
  name: string;
};

type Payment = {
  status: "unpaid" | "paid" | string;
  amount: number;
};

type Reservation = {
  id: number | string;
  price: number;
  startDate: string | Date;
  endDate: string | Date;
  Room: Room;
  Payment: Payment[];
};

const MyReserveList = async () => {
  const reservation = (await getReservationByUserId()) as Reservation[] | null;
  if (!reservation) return notFound();

  return (
    <div className="space-y-6">
      {reservation.map((item: Reservation) => {
        const start = new Date(item.startDate);
        const end = new Date(item.endDate);
        const payment = item.Payment?.[0];

        return (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-gray-50 px-4 py-2 border-b border-gray-200">
              <h1 className="text-sm font-semibold text-gray-800">
                Reservation ID: #{item.id}
              </h1>
              <div className="flex items-center gap-1 text-sm">
                <span className="text-gray-600">Status:</span>
                <span
                  className={`font-bold uppercase ${
                    payment?.status === "unpaid" ? "text-red-500" : "text-green-600"
                  }`}
                >
                  {payment?.status ?? "unknown"}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col md:flex-row">
              {/* Gambar */}
              <div className="md:w-1/3 relative">
                <Image
                  src={item.Room.image}
                  alt="room image"
                  width={400}
                  height={250}
                  className="object-cover w-full h-48 md:h-full"
                />
              </div>

              {/* Detail */}
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div className="space-y-1 text-sm text-gray-800">
                  <div className="flex justify-between">
                    <span className="font-medium">Room Name</span>
                    <span className="truncate">{item.Room.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Price</span>
                    <span>{formatCurrency(item.price)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Arrival</span>
                    <span>{formatDate(start.toISOString())}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Departure</span>
                    <span>{formatDate(end.toISOString())}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Duration</span>
                    <span>
                      {differenceInCalendarDays(end, start)} Night(s)
                    </span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Subtotal</span>
                    <span>{payment && formatCurrency(payment.amount)}</span>
                  </div>
                </div>

                {/* Tombol Aksi */}
                <div className="flex justify-end mt-4">
                  {payment?.status === "unpaid" ? (
                    <Link
                      href={`/checkout/${item.id}`}
                      className="px-5 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
                    >
                      Pay Now
                    </Link>
                  ) : (
                    <Link
                      href={`/myreservation/${item.id}`}
                      className="px-5 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors"
                    >
                      View Detail
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyReserveList;
