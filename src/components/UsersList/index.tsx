import React, { useEffect } from "react";

import Error from "components/Error";
import UserCard from "./UserCard";
import UsersListHeader from "./UsersListHeader";

import useThunk from "hooks/useThunk";

import { fetchUsers, useAppSelector } from "store";
import { IUser } from "store/types";

interface IUsersListProps {}

function UsersList({}: IUsersListProps) {
  //RUN THUNK HOOK
  const { loading, error, runThunk } = useThunk(fetchUsers);

  //REDUX
  const usersStore = useAppSelector((store) => store.users);
  const { data } = usersStore;

  //LIFE CYCLE HOOKS
  useEffect(() => {
    runThunk();
  }, [runThunk]);

  //RENDER Content
  const content = loading ? (
    <div className="flex flex-col w-full">
      {[...new Array(10)].map((_, index) => (
        <UserCard user={null} loading={true} key={index} />
      ))}
    </div>
  ) : error ? (
    <Error customClass="mt-16" error={error} />
  ) : (
    <Users data={data} />
  );

  return (
    <div className="flex flex-col w-full">
      <UsersListHeader />
      {content}
    </div>
  );
}

function Users({ data }: { data: IUser[] }) {
  return (
    <>
      <div className="flex flex-col w-full">
        {data.length > 0 ? (
          <div className="flex flex-col w-full">
            {data.map((user) => (
              <UserCard user={user} key={user.id} />
            ))}
          </div>
        ) : (
          <p className="mt-16 text-center font-bold text-gray-600">
            There is no users here! :/
          </p>
        )}
      </div>
    </>
  );
}

export default UsersList;
