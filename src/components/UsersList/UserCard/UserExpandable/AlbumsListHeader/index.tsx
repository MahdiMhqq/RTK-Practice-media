import React, { useState } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";

import Button from "components/Button";

import { IUser } from "store/types";
import { useAddAlbumMutation } from "store";

interface IAlbumsListHeaderProps {
  user: IUser;
}

function AlbumsListHeader({ user }: IAlbumsListHeaderProps) {
  // ADD ALBUM RTK QUERY
  const [addAlbum, results] = useAddAlbumMutation();

  return (
    <>
      <div className={` flex items-center justify-between `}>
        <h2 className="text-xl font-bold italic text-emerald-500 select-none">
          {user.name?.toUpperCase()} Albums
        </h2>
        <Button
          className="w-[15ch]"
          onClick={(e) => {
            e.stopPropagation();
            if (!results.isLoading) addAlbum(user);
          }}
          loading={results.isLoading}
        >
          <BsFillPlusSquareFill className="w-4 h-4" />
          <span>Add Album</span>
        </Button>
      </div>
    </>
  );
}

export default AlbumsListHeader;
