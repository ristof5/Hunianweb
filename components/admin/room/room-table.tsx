import { getRooms } from "@/lib/data";
import { formatCurrency, formatDate } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { DeleteButton, EditButton } from "@/components/admin/room/button";

type Room = {
  id: string;
  name: string;
  price: number;
  image: string;
  createdAt: string | Date;
};

const RoomTable = async () => {
  const rooms: Room[] = (await getRooms()) ?? [];
  if (!rooms?.length) return <p>No Room Found</p>;
  return (
    <div className="bg-white p-4 mt-5 shadow-sm">
      <table className="w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase text-left">
              Image
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
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-gray-900">
          {rooms.map((room) => (
            <tr key={room.id} className="hover:bg-gray-200">
              <td className="px-6 py-4">
                <div className="h-20 w-32 relative">
                  <Image
                    src={room.image}
                    fill
                    sizes="20vw"
                    alt="room image"
                    className="object-cover"
                  />
                </div>{" "}
              </td>
              <td className="px-6 py-4">{room.name}</td>
              <td className="px-6 py-4">{formatCurrency(room.price)}</td>
              <td className="px-6 py-4">
                {formatDate(room.createdAt.toString())}
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-center gap-1">
                  <EditButton id={room.id} />
                  <DeleteButton id={room.id} image={room.image} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomTable;