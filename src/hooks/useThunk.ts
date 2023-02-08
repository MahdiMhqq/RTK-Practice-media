import React, { useCallback, useState } from "react";

import { useAppDispatch } from "store";

import type { AsyncThunk } from "@reduxjs/toolkit";

function useThunk(thunkAction: AsyncThunk<any, void, any>) {
  //STATES
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  //REDUX
  const dispatch = useAppDispatch();

  //LOGIC
  const runThunk = useCallback(() => {
    setLoading(true);
    dispatch(thunkAction())
      .unwrap()
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [dispatch, thunkAction]);

  return { loading, error, runThunk };
}

export default useThunk;
