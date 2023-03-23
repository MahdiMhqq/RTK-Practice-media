import React from "react";
import { BsXCircleFill } from "react-icons/bs";

import CircleSpinner from "components/CircleSpinner";
import { useDeletePhotoMutation } from "store";

import { IPhoto } from "store/types";

interface IPhotoCardProps {
  customClass?: string;
  photo: IPhoto | null;
  loading?: boolean;
}
function PhotoCard({
  customClass = "",
  photo,
  loading = false,
}: IPhotoCardProps) {
  //RTK QUERY
  const [deletePhoto, { isLoading }] = useDeletePhotoMutation();

  return (
    <div
      className={`relative group rounded-md overflow-hidden aspect-square ${customClass} ${
        loading ? "skeleton" : ""
      }`}
    >
      <img className={`w-full h-full`} src={photo?.src} alt={photo?.alt} />
      <div className="absolute z-10 inset-0 bg-gradient-to-tr from-black to-[#0000] transition duration-300 opacity-0 group-hover:opacity-100 p-4">
        <div className="w-full h-full flex flex-col justify-between items-start">
          <span
            className={`flex items-center justify-center h-6 w-6 ${
              isLoading ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              !isLoading && photo && deletePhoto(photo);
            }}
          >
            {isLoading ? (
              <CircleSpinner innerSpinnerClass="border-t-red-500" />
            ) : (
              <BsXCircleFill className="h-5 w-5 fill-red-500 hover:fill-red-700 tranisiton" />
            )}
          </span>
          <div className="text-xl font-bold italic text-white select-none">
            {photo?.alt}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;
