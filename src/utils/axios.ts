import axios from 'axios'

export const JSON = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`,
  responseType: "json",
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'get',
  timeout: 999999999999999999999
})
