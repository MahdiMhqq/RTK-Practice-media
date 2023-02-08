import React, { useEffect } from "react";

import Loading from "components/Loading";
import Error from "components/Error";
import UserCard from "./UserCard";
import UsersListHeader from "./UsersListHeader";

import { useAppDispatch, fetchUsers, useAppSelector } from "store";
import { IUser } from "store/types";

interface IUsersListProps {}

function UsersList({}: IUsersListProps) {
  //REDUX
  const dispatch = useAppDispatch();
  const usersStore = useAppSelector((store) => store.users);
  const { data, loading, error } = usersStore;

  //LIFE CYCLE HOOKS
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  //RENDER Content
  const content = loading ? (
    <Loading customClass="mt-16" />
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
