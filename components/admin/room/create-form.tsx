"use client";

import { type PutBlobResult } from "@vercel/blob";
import Image from "next/image";
import { useRef, useState, useTransition } from "react";
import { IoCloudUploadOutline, IoTrashOutline } from "react-icons/io5";
import { BarLoader } from "react-spinners";

const CreateForm = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();

  const handleUpload = () => {
    if (!inputFileRef.current?.files) return null;
    const file = inputFileRef.current.files[0];
    const formData = new FormData();
    formData.set("file", file);
    startTransition(async () => {
      try {
        const response = await fetch("/api/upload", {
          method: "PUT",
          body: formData,
        });
        const data = await response.json();
        if (response.status !== 200) {
          setMessage(data.message);
          return;
        }
        const img = data as PutBlobResult;
        setImage(img.url);
        // setMessage("Upload berhasil ✅");
      } catch (error) {
        console.log(error);
        // setMessage("Terjadi error saat upload");
      }
    });
  };

  const deleteImage = (image: string) => {
    startTransition(async () => {
      try {
        await fetch(`/api/upload/?imageUrl=${image}`, {
          method: "DELETE",
        });
        setImage("");
      } catch (error) {
        console.log(error);
      }
    });
  };

  return (
    <form action="">
      <div className="grid md:grid-cols-12 gap-5">
        <div className="col-span-8 bg-white p-4">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              className="py-2 px-4 rounded-sm border border-gray-500 w-full placeholder-gray-500"
              placeholder="Room Name..."
            />
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red-500 mt-2">Message</span>
            </div>
          </div>
          <div className="mb-4">
            <textarea
              name="description"
              rows={8}
              className="py-2 px-4 rounded-sm border border-gray-500 w-full placeholder-gray-500"
              placeholder="Description"
            ></textarea>
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red-500 mt-2">Message</span>
            </div>
          </div>
          <div className="mb-4 grid md:grid-cols-3">
            <input
              type="checkbox"
              name="amenities"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded placeholder-gray-500"
              placeholder="Amenities"
            />
            <label className="ms-2 text-sm font-medium text-gray-900 capitalize">
              Spa
            </label>
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red-500 mt-2">Message</span>
            </div>
          </div>
        </div>
        <div className="col-span-4 bg-white p-4">
          <label
            htmlFor="input-file"
            className="flex flex-col mb-4 items-center justify-center aspect-video border-2 border-gray-300
            border-dashed rounded-md cursor-pointer bg-gray-50 relative"
          >
            <div className="flex flex-col items-center justify-center text-gray-500 pt-5 pb-6 z-10">
              {pending ? <BarLoader /> : null}
              {/* kondisi image */}
              {image ? (
                <button
                  type="button"
                  onClick={() => deleteImage(image)}
                  className="flex items-center justify-center
                bg-transparent size-6 rounded-sm absolute right-1 top-1 text-white hover:bg-red-400"
                >
                  <IoTrashOutline className="size-4 text-transparent hover:text-white" />
                </button>
              ) : (
                <div className="flex flex-col items items-center justify-center">
                  <IoCloudUploadOutline className="size-8" />
                  <p className="mb-1 text-sm font-bold">Select image</p>
                  {/*kondisi message*/}
                  {message ? (
                    <p className="text-xm text-red-500">{message}</p>
                  ) : (
                    <p className="text-xs">
                      {" "}
                      SVG, PNG, JPEG, GIF, or Others (max: 4MB)
                    </p>
                  )}
                </div>
              )}
            </div>
            {/* kondisi upload image */}
            {!image ? (
              <input
                type="file"
                ref={inputFileRef}
                onChange={handleUpload}
                id="input-file"
                className="hidden"
              />
            ) : (
              <Image
                src={image}
                alt="image"
                width={640}
                height={360}
                className="rounded-md absolute aspect-video
              object-cover"
              />
            )}
          </label>
          <div className="mb-4">
            <input
              type="text"
              name="capacity"
              className="py-2 px-4 rounded-sm border border-gray-500 w-full placeholder-gray-500"
              placeholder="Capacity.."
            />
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red-500 mt-2">Message</span>
            </div>
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="price"
              className="py-2 px-4 rounded-sm border border-gray-500 w-full placeholder-gray-500"
              placeholder="Price.."
            />
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red-500 mt-2">Message</span>
            </div>
          </div>
          <button
            type="submit"
            className="bg-orange-400 text-white w-full hover:bg-orange-500 py-2.5 px-6 md:px-10 text-lg 
            font-semibold cursor-pointer"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateForm;
