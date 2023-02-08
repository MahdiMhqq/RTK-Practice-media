import React from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";

import CircleSpinner from "components/CircleSpinner";

import useThunk from "hooks/useThunk";
import { addUser } from "store";

interface IUsersListHeaderProps {
  customClass?: string;
}

function UsersListHeader({ customClass = "" }: IUsersListHeaderProps) {
  //RUN THUNK HOOK
  const { loading, runThunk } = useThunk(addUser);

  return (
    <div className={`flex items-center justify-between ${customClass}`}>
      <h2 className="text-2xl font-bold italic text-emerald-500">Users List</h2>
      <button
        className={`w-[12ch] flex items-center justify-center px-3 py-2 text-center font-bold text-white rounded-md cursor-pointer bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 transition gap-x-2 ${
          loading ? "!bg-gray-600 cursor-not-allowed" : ""
        }`}
        onClick={() => {
          if (!loading) runThunk();
        }}
        disabled={loading}
      >
        {loading ? (
          <CircleSpinner />
        ) : (
          <>
            <BsFillPlusSquareFill className="w-4 h-4" />
            <span>Add User</span>
          </>
        )}
      </button>
    </div>
  );
}

export default UsersListHeader;
