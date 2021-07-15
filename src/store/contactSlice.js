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
    startEditContact(state, action) {
      const contact = state.contacts.find(
        (contact) => contact.id == action.payload
      );
      state.editingContact = contact;
    },
  },
});

export const { refreshList, startEditContact } = contactSlice.actions;
export default contactSlice.reducer;
