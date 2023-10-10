import { apiSetup } from './api-setup.service'

const apiClient = () => {
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
