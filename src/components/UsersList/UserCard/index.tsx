import React, { useState } from "react";
import { BsXCircleFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";

import CircleSpinner from "components/CircleSpinner";

import useThunk from "hooks/useThunk";

import { IUser } from "store/types";
import { removeUser } from "store";
import UserExapndable from "./UserExpandable";

interface IUserCardProps {
  user: IUser | null;
  loading?: boolean;
}

function UserCard({ user, loading = false }: IUserCardProps) {
  //STATES
  const [expanded, setExpanded] = useState(false);

  //USE THUNK HOOK
  const { loading: deleteLoading, runThunk: deleteThunk } =
    useThunk(removeUser);

  //LOGIC
  const handleDeleteUser = () => {
    user && deleteThunk(user?.id);
  };

  return (
    <div
      className={`px-4 py-2 rounded-lg border border-gray-200 shadow-card ${
        loading ? "skeleton h-[2.625rem]" : ""
      }`}
    >
      <div
        className="flex items-center gap-x-3 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          setExpanded((prev) => !prev);
        }}
      >
        <span
          className={`flex items-center justify-center h-6 w-6 ${
            deleteLoading ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            !deleteLoading && handleDeleteUser();
          }}
        >
          {deleteLoading ? (
            <CircleSpinner innerSpinnerClass="border-t-red-500" />
          ) : (
            <BsXCircleFill className="h-5 w-5 fill-red-500 hover:fill-red-700 tranisiton" />
          )}
        </span>
        <span className="text-zinc-600 font-bold select-none">
          {user?.name ?? " "}
        </span>
        <FaChevronDown
          className={`w-7 h-7 fill-emerald-500 hover:fill-emerald-700 transition cursor-pointer ml-auto origin-center ${
            expanded ? "" : "-rotate-90"
          }`}
        />
      </div>
      {user && <UserExapndable expanded={expanded} user={user} />}
    </div>
  );
}

export default UserCard;
