import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAlbum, IUser } from "store/types";
import { faker } from "@faker-js/faker";

const albumsApiSlice = createApi({
  reducerPath: "albums",
  tagTypes: ["Album"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3500",
  }),
  endpoints(builder) {
    return {
      getAlbums: builder.query({
        providesTags: (result, error, user) => [{ type: "Album", id: user.id }],
        query: (user: IUser) => ({
          url: "/albums",
          params: {
            userId: user.id,
          },
          method: "GET",
        }),
      }),
      deleteAlbum: builder.mutation({
        invalidatesTags: (results, error, album) => [
          {
            type: "Album",
            id: album.userId,
          },
        ],
        query: (album: IAlbum) => ({
          url: `albums/${album.id}`,
          method: "DELETE",
        }),
      }),
      addAlbum: builder.mutation({
        invalidatesTags: (results, error, user) => [
          { type: "Album", id: user.id },
        ],
        query: (user: IUser) => ({
          url: "/albums",
          method: "POST",
          body: {
            title: faker.commerce.productName(),
            userId: user.id,
          },
        }),
      }),
    };
  },
});

export const {
  useGetAlbumsQuery,
  useAddAlbumMutation,
  useDeleteAlbumMutation,
} = albumsApiSlice;
export { albumsApiSlice };
