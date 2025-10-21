import Card from "@/components/card";
import { getRooms } from "@/lib/data";
import { notFound } from "next/navigation";

/* main.tsx mengimport card */
type Room = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  Capacity: number;
  createdAt: Date;
  updatedAt: Date;
  categoryId: string | null;
};

const Main = async () => {
  const rooms: Room[] = (await getRooms()) ?? [];
  if (rooms.length === 0) return notFound();
  return (
    <div className="max-w-screen-xl py-6 pb-20 px-4 mx-auto">
      <div className="grid gap-7 md:grid-cols-3 lg:grid-cols-3">
        {rooms.map((room) => (
          <Card room={room} key={room.id} />
        ))}
      </div>
    </div>
  );
};

export default Main;
