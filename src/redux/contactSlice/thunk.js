import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteContact, fetchContacts, postContact } from 'utils/mockapi';

export const getContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    return await fetchContacts();
  }
);

export const postContactThunk = createAsyncThunk(
  'contacts/postContact',
  async data => {
    return await postContact(data);
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    return await deleteContact(id);
  }
);
