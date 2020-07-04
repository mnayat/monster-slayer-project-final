import axios from 'axios';
const HTTP = axios.create({
  baseURL: `https://monster-slayer-api-staging.herokuapp.com/`,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default HTTP;