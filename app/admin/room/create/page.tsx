import CreateRoom from "@/components/admin/room/create-room";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Create Room & Property - Hunian',
    
}

const CreateRoomPage = () => {
  return (
    <div className="max-w-screen-xl px-4 py-8 mt-4 mx-auto">
      <CreateRoom />
    </div>
  );
};

export default CreateRoomPage;
