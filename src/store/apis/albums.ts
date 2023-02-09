import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "inspector";
import { IAlbum, IUser } from "store/types";

const albumsApiSlice = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3500",
  }),
  endpoints(builder) {
    return {
      getAlbums: builder.query({
        query: (user: IUser) => ({
          url: "/albums",
          params: {
            userId: user.id,
          },
          method: "GET",
        }),
      }),
      deleteAlbum: builder.mutation({
        query: (album: IAlbum) => ({
          url: `albums/${album.id}`,
          method: "DELETE",
        }),
      }),
      addAlbum: builder.mutation({
        query: (album: IAlbum) => ({
          url: "/albums",
          method: "POST",
          body: {
            title: album.title,
            userId: album.userId,
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
