import axios from 'axios';

axios.defaults.baseURL =
  'https://64b8491a21b9aa6eb079c089.mockapi.io/contacts/';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  console.log(data);
  return data;
};

export const postContact = async dataContact => {
  const { data } = await axios.post('/contacts', dataContact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
