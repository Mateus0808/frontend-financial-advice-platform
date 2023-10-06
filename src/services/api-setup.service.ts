import axios from 'axios'

export const apiSetup = axios.create({
  baseURL: 'http://localhost:8080',
})
