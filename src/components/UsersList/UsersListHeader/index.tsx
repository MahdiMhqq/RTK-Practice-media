import React from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";

interface IUsersListHeaderProps {
  customClass?: string;
}

function UsersListHeader({ customClass = "" }: IUsersListHeaderProps) {
  return (
    <div className={`flex items-center justify-between ${customClass}`}>
      <h2 className="text-2xl font-bold italic text-emerald-500">Users List</h2>
      <button className="px-3 py-2 text-center font-bold text-white rounded-md cursor-pointer bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 transition flex items-center gap-x-2">
        <BsFillPlusSquareFill className="w-4 h-4" />
        <span>Add User</span>
      </button>
    </div>
  );
}

export default UsersListHeader;
