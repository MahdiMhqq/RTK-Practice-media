import React from "react";

import Error from "components/Error";
import AlbumsListHeader from "../AlbumsListHeader";

import { useGetAlbumsQuery } from "store";
import { IAlbum, IUser } from "store/types";

interface IAlbumsListProps {
  user: IUser;
  customClass?: string;
}

function AlbumsList({ user, customClass = "" }: IAlbumsListProps) {
  //GET ALBUMS
  const { isLoading, error, data } = useGetAlbumsQuery(user);

  //RENDER Content
  const content = isLoading ? (
    <div className="flex flex-col w-full">
      {[...new Array(10)].map((_, index) => (
        <AlbumCard user={null} loading={true} key={index} />
      ))}
    </div>
  ) : error ? (
    <Error customClass="mt-6" error={error} />
  ) : (
    <Albums data={data} />
  );

  return (
    <div className="flex flex-col w-full">
      <AlbumsListHeader user={user} />
      {content}
    </div>
  );
}

export default AlbumsList;

function Albums({ data }: { data: IAlbum[] }) {
  return (
    <>
      <div className="flex flex-col w-full">
        {data.length > 0 ? (
          <div className="flex flex-col w-full gap-y-2">
            {data.map((user) => (
              <AlbumCard user={user} key={user.id} />
            ))}
          </div>
        ) : (
          <p className="mt-6 text-center font-bold text-gray-600">
            There is no albums here yet!
          </p>
        )}
      </div>
    </>
  );
}
