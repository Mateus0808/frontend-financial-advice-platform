import cookie from 'cookie'
import { apiSetup } from './api-setup.service'

const apiClient = () => {
  const cookies = document.cookie

  const token = localStorage.getItem('access_token')

  const api = apiSetup
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
  }

  api.interceptors.request.use((config) => {
    return config
  })

  return api
}

export default apiClient()
