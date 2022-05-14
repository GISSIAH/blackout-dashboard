import axios from "axios";



export const  api = axios.create({
    baseURL: 'https://blackout-api.onrender.com',
    timeout: 3000,
  });