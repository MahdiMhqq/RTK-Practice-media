import React from "react";
import { BsXCircleFill } from "react-icons/bs";
import { BiChevronDownSquare } from "react-icons/bi";

import { IUser } from "store/types";

interface IUserCardProps {
  user: IUser | null;
  loading?: boolean;
}

function UserCard({ user, loading = false }: IUserCardProps) {
  return (
    <div
      className={`m-3 px-4 py-2 rounded-lg border border-gray-200 shadow-card flex items-center gap-x-3 ${
        loading ? "skeleton h-[2.625rem]" : ""
      }`}
    >
      <BsXCircleFill className="h-5 w-5 fill-red-500 hover:fill-red-700 tranisiton cursor-pointer" />
      <span className="text-zinc-600 font-bold">{user?.name ?? " "}</span>
      <BiChevronDownSquare className="w-7 h-7 fill-emerald-500 hover:fill-emerald-700 transition cursor-pointer ml-auto" />
    </div>
  );
}

export default UserCard;
