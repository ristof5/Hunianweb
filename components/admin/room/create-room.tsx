import CreateForm from "@/components/admin/room/create-form";
import { getAmenities, getCategories } from "@/lib/data";

//data fegging amenities
const CreateRoom = async () => {
  const amenities = await getAmenities();
  const categories = await getCategories();
  if (!amenities) return null;
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Create New Room & Property</h1>
      <CreateForm amenities={amenities} categories={categories ?? []}  />
    </div>
  );
};

export default CreateRoom;
