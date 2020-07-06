import axios from 'axios';
export const HTTP = axios.create({
  baseURL: `https://monster-slayer-api-staging.herokuapp.com/`,
  headers: {
    'Content-Type': 'application/json',
  }
});
