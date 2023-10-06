import { Route, Routes, useLocation } from 'react-router-dom'
import { Login } from '../pages/login/Login'
import { SignUp } from '../pages/signup'

export function Router() {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}
