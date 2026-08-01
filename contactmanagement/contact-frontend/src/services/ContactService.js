import axios from "axios";

const BASE_URL = "http://localhost:9090/contacts";

export const saveContact = (contact) => {
    return axios.post(BASE_URL, contact);
};

export const getAllContacts = () => {
    return axios.get(BASE_URL);
};

export const getContactById = (id) => {
    return axios.get(`${BASE_URL}/${id}`);
};

export const updateContact = (id, contact) => {
    return axios.put(`${BASE_URL}/${id}`, contact);
};

export const deleteContact = (id) => {
    return axios.delete(`${BASE_URL}/${id}`);
};
