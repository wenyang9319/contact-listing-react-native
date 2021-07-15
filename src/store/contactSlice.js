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
    setContact(state, action) {
      const { key, value } = action.payload;
      state.editingContact[key] = value;
    },
    saveEditingContact(state, action) {
      const { editingContact, contacts } = state;

      const { id } = editingContact;
      const index = contacts.findIndex((contact) => contact.id === id);
      contacts[index] = editingContact;
    },
  },
});

export const { refreshList, startEditContact, setContact, saveEditingContact } =
  contactSlice.actions;
export default contactSlice.reducer;
