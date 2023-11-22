import { AxiosError } from 'axios'
import { apiSetup } from '../api-setup.service'

interface ErrorResponse {
  message: string
}

export const userLoginService = async (data: any) => {
  try {
    const user = await apiSetup.post('/auth/login', data)

    return {
      data: user.data,
      error: false,
    }
  } catch (error: any) {
    console.log('userLoginService', error)
    const axiosError = error as AxiosError<ErrorResponse>
    let errorMessage: string

    if (axiosError.response) {
      errorMessage = axiosError.response.data.message
    } else if (axiosError.request) {
      errorMessage = 'Erro de conexão'
    } else {
      errorMessage = axiosError.message
    }

    return {
      data: errorMessage,
      error: true,
    }
  }
}
