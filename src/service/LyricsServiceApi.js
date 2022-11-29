/* eslint-disable import/prefer-default-export */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://www.stands4.com/services/v2/';
const LYRICS_ENDPOINT = 'lyrics.php?';
const UID = '11089';
const TOKEN_ID = 'c8ClEEdcIDhk72r1';

export const LyricsServiceApi = createApi({
  reducerPath: 'lyricsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getLyrics: builder.query({
      query: ({ lyrics, artist }) => ({
        url: LYRICS_ENDPOINT,
        params: {
          uid: UID,
          tokenid: TOKEN_ID,
          term: lyrics,
          artist,
          format: 'json',
        },
      }),
      transformResponse: (data) => {
        if (!data.result) {
          throw new Error();
        } else { return data?.result; }
      },
    }),
  }),
});

export const { useGetLyricsQuery, useLazyGetLyricsQuery } = LyricsServiceApi;
