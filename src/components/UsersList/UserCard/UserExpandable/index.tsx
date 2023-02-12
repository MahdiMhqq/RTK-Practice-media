import React from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";

import Button from "components/Button";

import { IUser } from "store/types";
import AlbumsListHeader from "./AlbumsListHeader";
import AlbumsList from "./AlbumsList";

interface IUserExapndableProps {
  expanded: boolean;
  user: IUser;
  customClass?: string;
}

function UserExapndable({
  expanded,
  customClass = "",
  user,
}: IUserExapndableProps) {
  return (
    <div
      className={`px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 ${customClass} ${
        expanded
          ? "max-h-screen visible opacity-100 mt-2"
          : "max-h-0 invisible !px-0 !py-0 opacity-0 mt-0"
      }`}
    >
      <AlbumsListHeader user={user} />
      <div className="h-[0.125rem] bg-gradient-to-r from-[#34d39900] via-[#34d399] to-[#34d39900] my-4" />
      <AlbumsList user={user} />
    </div>
  );
}

export default UserExapndable;
