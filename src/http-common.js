import axios from 'axios';

export default axios.create({
  // baseURL: 'https://localhost:8081.com/', localhost
  baseURL: 'https://poke-list-app-back.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});
