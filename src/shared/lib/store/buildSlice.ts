import { useMemo } from 'react';

import type { CreateSliceOptions, SliceCaseReducers } from '@reduxjs/toolkit';
import { bindActionCreators, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export function buildSlice<
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string,
>(options: CreateSliceOptions<State, CaseReducers, Name>) {
  const slice = createSlice(options);

  const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(
      () => bindActionCreators(slice.actions as any, dispatch),
      [dispatch],
    ) as typeof slice.actions;
  };

  return {
    ...slice,
    useActions,
  };
}
