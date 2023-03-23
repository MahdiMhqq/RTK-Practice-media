import React, { useState } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";

import Button from "components/Button";

import { IAlbum } from "store/types";
import { useAddPhotoMutation } from "store";

interface IAlbumsListHeaderProps {
  album: IAlbum;
}

function AlbumsListHeader({ album }: IAlbumsListHeaderProps) {
  // ADD ALBUM RTK QUERY
  const [addPhoto, results] = useAddPhotoMutation();

  return (
    <>
      <div
        className={`flex flex-col gap-y-2 md:flex-row md:items-center md:justify-between `}
      >
        <h2 className="text-xl font-bold italic text-emerald-500 select-none">
          {album.title?.toUpperCase()} Photos
        </h2>
        <Button
          className="w-full md:w-[15ch]"
          onClick={(e) => {
            e.stopPropagation();
            if (!results.isLoading) addPhoto(album);
          }}
          loading={results.isLoading}
        >
          <BsFillPlusSquareFill className="w-4 h-4" />
          <span>Add Photo</span>
        </Button>
      </div>
    </>
  );
}

export default AlbumsListHeader;
