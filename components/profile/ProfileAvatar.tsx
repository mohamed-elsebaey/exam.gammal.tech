"use client";

// import Image from "next/image";
import { useRef, useState } from "react";

const MAX_FILE_SIZE = 2097152;

export default function ProfileAvatar({
  imagePath,
  addButtons,
}: {
  imagePath: string;
  addButtons?: boolean;
}) {
  const [pickedImage, setPickedImage] = useState<any>(imagePath || "");

  const imageInput = useRef<any>(undefined);

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event: any) {
    const file = event?.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      alert("The image size is too large. Please choose smaller than 2MB.");
      imageInput.current.value = "";
    } else {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        setPickedImage(fileReader.result);
      };
    }
  }

  function handleDeleteImageChange() {
    setPickedImage("/profile/profile.png");
  }
  return (
    <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
      <img
        className="object-cover w-32 h-32 p-1 rounded-full ring-2 ring-primary/40"
        src={pickedImage ? pickedImage : "/profile/profile.png"}
        alt=""
      />
      <input
        hidden
        type="text"
        value={pickedImage}
        name="pickedImage"
        readOnly
      />
      <input
        className="hidden"
        type="file"
        id="image"
        accept="image/png, image/jpeg"
        name="image"
        ref={imageInput}
        //multiple
        onChange={handleImageChange}
        //required
      />

      {addButtons && (
        <div className="flex flex-col space-y-5 sm:ml-8">
          <button
            type="button"
            className="py-2 px-5 text-base font-medium text-white focus:outline-none bg-primary rounded-lg border border-primary/20 hover:bg-primary/90 focus:z-10 focus:ring-4 focus:ring-primary/20 "
            onClick={handlePickClick}
          >
            Change picture
          </button>
          <button
            type="button"
            className="py-2 px-5 text-base font-medium text-primary/90 focus:outline-none bg-white rounded-lg border border-primary/20 hover:bg-primary/10 hover:text-primary focus:z-10 focus:ring-4 focus:ring-primary/20 "
            onClick={handleDeleteImageChange}
          >
            Delete picture
          </button>
        </div>
      )}
    </div>
  );
}
