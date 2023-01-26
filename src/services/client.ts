import axios from 'axios'

import * as interceptors from './interceptors'

if (!process.env.API_BASE_URL) {
  throw new Error('API_BASE_URL variable missing .env')
}

const client = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json'
  }
})

client.interceptors.response.use(interceptors.responseSuccess)

export default client
