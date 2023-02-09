import React from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";

import Button from "components/Button";

import { IUser } from "store/types";

interface IAlbumsListHeaderProps {
  user: IUser;
}

function AlbumsListHeader({ user }: IAlbumsListHeaderProps) {
  //RUN THUNK HOOK
  //   const { loading, runThunk } = useThunk(addUser);

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
            //   if (!loading) runThunk();
          }}
        >
          <BsFillPlusSquareFill className="w-4 h-4" />
          <span>Add Album</span>
        </Button>
      </div>
    </>
  );
}

export default AlbumsListHeader;
