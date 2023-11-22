import { useEffect, useState } from 'react'
import { apiSetup } from '../../services/api-setup.service'
import { UserResponse } from '../../services/user/type/user-response.interface'
import { useNavigate } from 'react-router-dom'
import { userLoginService } from '../../services/user/auth-user.service'
import { getUserById } from '../../services/user/get-user-by-id.service'
import { errorNotify, successNotify } from '../../utils/notify'
// import { errorNotify } from '../../utils/notify';

type SignInData = {
  login: string
  password: string
}

export function useAuth() {
  const navigate = useNavigate()
  const [user, setUser] = useState<UserResponse>()
  const [loading, setLoading] = useState(true)
  const isAuthenticated = !!user

  // useEffect(() => {
  //   setLoading(true)
  //   ;(async function fetchData() {
  //     const token = localStorage.getItem('access_token')

  //     if (token) {
  //       return
  //     }
  //     navigate('/login')
  //   })()
  //   setLoading(false)
  // }, [])

  async function signIn({ login, password }: SignInData) {
    setLoading(true)
    try {
      const response = await userLoginService({ login, password })
      console.log('response', response)
      if (response.error) {
        errorNotify('Erro ao fazer login')
        return
      }
      const { token } = response.data

      localStorage.setItem('access_token', token)

      apiSetup.defaults.headers.common.authorization = `Bearer ${token}`
      successNotify('Usuário logado com sucesso')
      navigate('/dashboard')
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoading(false)
    }
  }

  async function signOut() {
    localStorage.removeItem('access_token')
    // localStorage.removeItem('snw_userId')
    navigate('/login')
  }

  return { signIn, signOut, isAuthenticated, user, loading, setUser }
}
