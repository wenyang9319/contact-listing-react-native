import { createSlice } from '@reduxjs/toolkit';

import contactList from './../data/data.json';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts: [],
    editingContact: {},
  },
  reducers: {
    refreshList(state) {
      state.contacts = contactList;
    },
  },
});

export const { refreshList } = contactSlice.actions;
export default contactSlice.reducer;
