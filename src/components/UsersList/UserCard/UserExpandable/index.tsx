import React from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";

import Button from "components/Button";

import { IUser } from "store/types";

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
      className={`px-4 py-2 rounded-lg border border-gray-200 flex items-center justify-between transition-all duration-300 ${customClass} ${
        expanded
          ? "max-h-screen visible opacity-100 mt-2"
          : "max-h-0 invisible !px-0 !py-0 opacity-0 mt-0"
      }`}
    >
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
  );
}

export default UserExapndable;
