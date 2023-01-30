import axios from 'axios'

import * as interceptors from './interceptors'

const client = axios.create({
  baseURL: process.env.API_BASE_URL ?? 'https://5b67c708f793e00014562619.mockapi.io/api', // for security
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json'
  }
})

client.interceptors.response.use(interceptors.responseSuccess)

export default client
