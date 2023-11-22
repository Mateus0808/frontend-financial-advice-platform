import { Route, Routes, useLocation } from 'react-router-dom'
import { Home } from '../pages/Home'
import { TransactionsProvider } from '../hooks/useTransaction'

export function Router() {
  const location = useLocation()

  return (
    <TransactionsProvider>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
      </Routes>
    </TransactionsProvider>
  )
}
