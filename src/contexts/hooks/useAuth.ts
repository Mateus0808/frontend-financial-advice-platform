import { useEffect, useState } from 'react'
import { apiSetup } from '../../services/api-setup.service'
import { UserResponse } from '../../services/user/type/user-response.interface'
import { useNavigate } from 'react-router-dom'
import { userLoginService } from '../../services/user/auth-user.service'
import { getUserById } from '../../services/user/get-user-by-id.service'
import { errorNotify } from '../../utils/notify'
// import { errorNotify } from '../../utils/notify';

type SignInData = {
  email: string
  password: string
}

export function useAuth() {
  const navigate = useNavigate()
  const [user, setUser] = useState<UserResponse>()
  const [loading, setLoading] = useState(true)
  const isAuthenticated = !!user

  useEffect(() => {
    setLoading(true)
    ;(async function fetchData() {
      const token = localStorage.getItem('access_token')
      const userId = localStorage.getItem('snw_userId')
      if (token && userId) {
        const myUser = await getUserById(userId)
        setUser(myUser.data)
        return
      }
      navigate('/')
    })()
    setLoading(false)
  }, [])

  async function signIn({ email, password }: SignInData) {
    setLoading(true)
    try {
      const response = await userLoginService({ email, password })
      if (response.error) {
        errorNotify(response.data)
        return
      }
      const { user: newUser, token } = response.data
      setUser(newUser)

      localStorage.setItem('paf_token', token)
      localStorage.setItem('snw_userId', newUser.id)

      apiSetup.defaults.headers.common.authorization = `Bearer ${token}`
      navigate('/home')
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoading(false)
    }
  }

  async function signOut() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('snw_userId')
    navigate('/')
  }

  return { signIn, signOut, isAuthenticated, user, loading, setUser }
}
