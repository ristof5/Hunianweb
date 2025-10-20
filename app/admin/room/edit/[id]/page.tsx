import EditRoom from "@/components/admin/room/edit-room";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Update Room & Property - Hunian",
};

const UpdateRoomPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params; // ⬅️ params harus di-await
  const roomId = id;

  if (!roomId) return notFound();

  return (
    <div className="max-w-screen-xl px-4 py-16 mt-10 mx-auto">
      <Suspense fallback={<p>loading...</p>}>
        <EditRoom roomId={roomId} />
      </Suspense>
    </div>
  );
};

export default UpdateRoomPage;
