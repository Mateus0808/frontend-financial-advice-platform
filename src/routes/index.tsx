import { Route, Routes, useLocation } from 'react-router-dom'
import { Login } from '../pages/login/Login'
import { SignUp } from '../pages/signup'
import { Home } from '../pages/Home'
import { UserHome } from '../pages/UserHome'

export function Router() {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/user" element={<UserHome />} />
    </Routes>
  )
}
