import React from "react";

import Error from "components/Error";
import PhotoCard from "./PhotoCard";

import { useGetPhotosQuery } from "store";
import { IAlbum, IPhoto } from "store/types";

interface IPhotoListProps {
  album: IAlbum;
  customClass?: string;
}

function PhotoList({ album, customClass = "" }: IPhotoListProps) {
  //GET ALBUMS
  const { isLoading, error, data } = useGetPhotosQuery(album);

  //RENDER Content
  const content = isLoading ? (
    <div className="flex flex-wrap w-full gap-2">
      {[...new Array(10)].map((_, index) => (
        <PhotoCard
          customClass="w-full md:w-[calc((100%_-_1rem)/3)] shrink-0"
          photo={null}
          loading={true}
          key={index}
        />
      ))}
    </div>
  ) : error ? (
    <Error customClass="my-6" error={error} />
  ) : (
    <Photos data={data} />
  );

  return <div className="flex flex-col w-full">{content}</div>;
}

export default PhotoList;

function Photos({ data }: { data: IPhoto[] }) {
  return (
    <>
      <div className="flex flex-col w-full">
        {data.length > 0 ? (
          <div className="flex flex-wrap w-full gap-2">
            {data.map((photo) => (
              <PhotoCard
                customClass="w-full md:w-[calc((100%_-_1rem)/3)] shrink-0"
                photo={photo}
                key={photo.id}
              />
            ))}
          </div>
        ) : (
          <p className="my-6 text-center font-bold text-gray-600">
            There is no photos here yet!
          </p>
        )}
      </div>
    </>
  );
}
