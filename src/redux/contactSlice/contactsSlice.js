import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  deleteContactThunk,
  getContactsThunk,
  postContactThunk,
} from './thunk';
import { initialState } from './initialState';
import {
  handleFulfilled,
  handleFulfilledDelete,
  handleFulfilledGet,
  handleFulfilledPost,
  handlePending,
  handleRejected,
} from './handleContacts';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const arrThunk = [deleteContactThunk, getContactsThunk, postContactThunk];

const getArrThunkStatus = status => arrThunk.map(elem => elem[status]);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(postContactThunk.fulfilled, handleFulfilledPost)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...getArrThunkStatus(PENDING)), handlePending)
      .addMatcher(isAnyOf(...getArrThunkStatus(FULFILLED)), handleFulfilled)
      .addMatcher(isAnyOf(...getArrThunkStatus(REJECTED)), handleRejected);
  },
});
