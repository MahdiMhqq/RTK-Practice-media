import React from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";

import Button from "components/Button";

import useThunk from "hooks/useThunk";
import { addUser } from "store";

interface IUsersListHeaderProps {
  customClass?: string;
}

function UsersListHeader({ customClass = "" }: IUsersListHeaderProps) {
  //RUN THUNK HOOK
  const { loading, runThunk } = useThunk(addUser);

  return (
    <>
      <div className={`flex items-center justify-between ${customClass}`}>
        <h2 className="text-2xl font-bold italic text-emerald-500">
          Users List
        </h2>
        <Button
          onClick={() => {
            if (!loading) runThunk();
          }}
        >
          <BsFillPlusSquareFill className="w-4 h-4" />
          <span>Add User</span>
        </Button>
      </div>
      <div className="h-[0.125rem] bg-gradient-to-r from-[#34d39900] via-[#34d399] to-[#34d39900] my-4" />
    </>
  );
}

export default UsersListHeader;
