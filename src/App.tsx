import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { Router } from './routes'
import { AuthProvider } from './contexts/AuthContext' 

function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={4000} />
      <Router />
    </BrowserRouter>
  )
}

export default App
