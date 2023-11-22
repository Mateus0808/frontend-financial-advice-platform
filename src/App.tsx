import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { Router } from './routes'
import { UserRouter } from './routes/UserRouter'
import { TransactionRouter } from './routes/Transaction'

function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={4000} />
      <Router />
      <UserRouter />
      <TransactionRouter /> 
    </BrowserRouter>
  )
}

export default App
