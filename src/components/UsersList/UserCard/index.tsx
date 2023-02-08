import React from "react";
import { IUser } from "store/types";

interface IUserCardProps {
  user: IUser;
}

function UserCard({ user }: IUserCardProps) {
  return (
    <div className="m-3 px-4 py-2 text-zinc-900 font-bold rounded-lg border border-gray-200 shadow-card">
      {user.name}
    </div>
  );
}

export default UserCard;
