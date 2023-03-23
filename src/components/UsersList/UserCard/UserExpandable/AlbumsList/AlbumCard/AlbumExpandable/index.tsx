import React from "react";

import PhotoListHeader from "./PhotoListHeader";
import PhotoList from "./PhotoList";

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
          ? "max-h-screen visible opacity-100 mt-2 overflow-y-scroll overflow-x-hidden"
          : "max-h-0 invisible !px-0 !py-0 opacity-0 mt-0"
      }`}
    >
      <PhotoListHeader album={album} />
      <div className="h-[0.125rem] bg-gradient-to-r from-[#34d39900] via-[#34d399] to-[#34d39900] my-4" />
      <PhotoList album={album} />
    </div>
  );
}

export default AlbumExapndable;
