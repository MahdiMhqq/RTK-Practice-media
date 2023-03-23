import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAlbum, IPhoto } from "store/types";
import { faker } from "@faker-js/faker";

const photosApiSlice = createApi({
  reducerPath: "photos",
  tagTypes: ["Photo"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3500",
  }),
  endpoints(builder) {
    return {
      getPhotos: builder.query({
        providesTags: (result, error, album) => [
          { type: "Photo", id: album.id },
        ],
        query: (album: IAlbum) => ({
          url: "/photos",
          params: {
            albumId: album.id,
          },
          method: "GET",
        }),
      }),
      deletePhoto: builder.mutation({
        invalidatesTags: (results, error, photo) => [
          {
            type: "Photo",
            id: photo.albumId,
          },
        ],
        query: (photo: IPhoto) => ({
          url: `photos/${photo.id}`,
          method: "DELETE",
        }),
      }),
      addPhoto: builder.mutation({
        invalidatesTags: (results, error, album) => [
          { type: "Photo", id: album.id },
        ],
        query: (album: IAlbum) => ({
          url: "/photos",
          method: "POST",
          body: {
            alt: faker.animal.insect(),
            src: faker.image.imageUrl(400, 400, undefined, true),
            albumId: album.id,
          },
        }),
      }),
    };
  },
});

export const {
  useGetPhotosQuery,
  useAddPhotoMutation,
  useDeletePhotoMutation,
} = photosApiSlice;
export { photosApiSlice };
