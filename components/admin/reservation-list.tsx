import { getReservations } from "@/lib/data";
import { formatCurrency, formatDate } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Room = {
  name: string;
  image: string;
};

type User = {
  name: string;
};

type Payment = {
  status: string;
};

type Reservation = {
  id: string;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  price: number;
  Room: Room;
  User: User;
  Payment?: Payment[];
};

const ReservationList = async (): Promise<React.ReactElement> => {
  const reservations = (await getReservations()) as Reservation[] | null;

  if (!reservations?.length) return <p>No Reservations Found</p>;

  return (
    <div className="bg-white p-4 mt-5 shadow-sm">
      <table className="w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase text-left">
              Image
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase text-left">
              Customer Name
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase text-left">
              Arrival
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase text-left">
              Departure
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase text-left">
              Room Name
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase text-left">
              Price
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase text-left">
              Created At
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase ">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-gray-900">
          {reservations.map((reserve: Reservation) => (
            <tr key={reserve.id} className="hover:bg-gray-200">
              <td className="px-6 py-4">
                <div className="h-20 w-32 relative">
                  <Image
                    src={reserve.Room.image}
                    fill
                    sizes="20vw"
                    alt="room image"
                    className="object-cover"
                  />
                </div>{" "}
              </td>
              <td className="px-6 py-4">{reserve.User.name}</td>
              <td className="px-6 py-4">
                {formatDate(reserve.startDate.toISOString())}
              </td>
              <td className="px-6 py-4">
                {formatDate(reserve.endDate.toISOString())}
              </td>
              <td className="px-6 py-4">{reserve.Room.name}</td>
              <td className="px-6 py-4">{formatCurrency(reserve.price)}</td>
              <td className="px-6 py-4">
                {formatDate(reserve.createdAt.toISOString())}
              </td>
              <td className="px-6 py-4 text-right">
                <span>{reserve.Payment?.[0]?.status ?? "—"}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationList;
