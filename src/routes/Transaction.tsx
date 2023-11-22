import { Route, Routes, useLocation } from 'react-router-dom'
import { AuthProvider } from '../contexts/AuthContext'
import { Dashboard } from '../components/transaction/Dashboard'
import { TransactionsProvider } from '../hooks/useTransaction'

export function TransactionRouter() {
  const location = useLocation()

  return (
    <AuthProvider>
      <TransactionsProvider>
        <Routes location={location} key={location.pathname}>
          <Route path="/home/transacoes" element={<Dashboard />} />
        </Routes>
      </TransactionsProvider>
    </AuthProvider>
  )
}
