import { getAmenities, getRoomsById, getCategories } from "@/lib/data";
import EditForm from "@/components/admin/room/edit-form";
import { notFound } from "next/navigation";

//data fegging amenities
const EditRoom = async ({ roomId }: { roomId: string }) => {
  const [amenities, room, categories] = await Promise.all([
    getAmenities(),
    getRoomsById(roomId),
    getCategories(),
  ]);

  if (!amenities || !room || !categories) return notFound();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Edit a Room & Property</h1>
      <EditForm
        amenities={amenities}
        categories={categories}
        room={room}
      />
    </div>
  );
};

export default EditRoom;
