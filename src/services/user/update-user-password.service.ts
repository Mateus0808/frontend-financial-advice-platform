import { AxiosError } from 'axios'

import apiClient from '../api-client.service'
import { UserResponse } from './type/user-response.interface'
import { UpdateUserPasswordRequest } from '../requests/user/update-user.interface'

interface ErrorResponse {
  message: string
}

export const updateUserPasswordService = async (userId: number, data: UpdateUserPasswordRequest) => {
  try {
    const user = await apiClient.put<UserResponse>(`/users/update-password/${userId}`, data)

    return {
      data: user.data,
      error: false,
    }
  } catch (error: any) {
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
