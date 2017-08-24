import axios from 'axios';

const url = 'http://localhost:3000/api/countries'

export const getCountries = () => {
  return axios.get(url);
}

export const editCountry = (params) => {
  return axios.put(`${url}/${params.id}`);
}

export const addCountry = (params) => {
  return axios.post('http://localhost:3000/api/new-country', params);
}

export const removeCountry = () => {
  return axios.get(url);
}
