import React from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";

import Button from "components/Button";

import { IAlbum } from "store/types";

interface IAlbumExapndableProps {
  expanded: boolean;
  album: IAlbum;
  customClass?: string;
}

function AlbumExapndable({
  expanded,
  customClass = "",
  album,
}: IAlbumExapndableProps) {
  return (
    <div
      className={`px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 ${customClass} ${
        expanded
          ? "max-h-screen visible opacity-100 mt-2"
          : "max-h-0 invisible !px-0 !py-0 opacity-0 mt-0"
      }`}
    >
      <div className={` flex items-center justify-between `}>
        <h2 className="text-xl font-bold italic text-emerald-500 select-none">
          {album.title?.toUpperCase()} Albums
        </h2>
        <Button
          className="w-[15ch]"
          onClick={(e) => {
            e.stopPropagation();
            //   if (!loading) runThunk();
          }}
        >
          <BsFillPlusSquareFill className="w-4 h-4" />
          <span>Add Album</span>
        </Button>
      </div>
      <div className="h-[0.125rem] bg-gradient-to-r from-[#34d39900] via-[#34d399] to-[#34d39900] my-4" />
    </div>
  );
}

export default AlbumExapndable;
