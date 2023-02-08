import React from "react";
import { BsXCircleFill } from "react-icons/bs";
import { BiChevronDownSquare } from "react-icons/bi";

import { IUser } from "store/types";
import useThunk from "hooks/useThunk";
import { removeUser } from "store";
import CircleSpinner from "components/CircleSpinner";

interface IUserCardProps {
  user: IUser | null;
  loading?: boolean;
}

function UserCard({ user, loading = false }: IUserCardProps) {
  //USE THUNK HOOK
  const { loading: deleteLoading, runThunk: deleteThunk } =
    useThunk(removeUser);

  //LOGIC
  const handleDeleteUser = () => {
    user && deleteThunk(user?.id);
  };

  return (
    <div
      className={`px-4 py-2 rounded-lg border border-gray-200 shadow-card flex items-center gap-x-3 ${
        loading ? "skeleton h-[2.625rem]" : ""
      }`}
    >
      <span
        className={`flex items-center justify-center h-6 w-6 ${
          deleteLoading ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={() => !deleteLoading && handleDeleteUser()}
      >
        {deleteLoading ? (
          <CircleSpinner innerSpinnerClass="border-t-red-500" />
        ) : (
          <BsXCircleFill className="h-5 w-5 fill-red-500 hover:fill-red-700 tranisiton" />
        )}
      </span>
      <span className="text-zinc-600 font-bold">{user?.name ?? " "}</span>
      <BiChevronDownSquare className="w-7 h-7 fill-emerald-500 hover:fill-emerald-700 transition cursor-pointer ml-auto" />
    </div>
  );
}

export default UserCard;
