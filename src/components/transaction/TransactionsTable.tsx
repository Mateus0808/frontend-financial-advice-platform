import { useState } from 'react'
import { useTransactions } from '../../hooks/useTransaction'
import { NewTransactionModal } from './NewTransactionModal'

export function TransactionsTable() {
  const { transactions } = useTransactions()

  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionOpen(false)
  }

  return (
    <div className="mt-16 relative">
      <div className="w-full flex justify-end mb-4">
        <button
          className="text-base text-white bg-primary border-0 py-0 px-8 rounded h-12 transition ease-in-out"
          type="button"
          onClick={handleOpenNewTransactionModal}
        >
          Nova transação
        </button>
      </div>
      <NewTransactionModal
        isOpen={isNewTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <div className="w-full grid grid-cols-4">
        <span className="'text-['#969cb3'] py-4 bg-black px-8 text-left leading-6">
          Título
        </span>
        <span className="'text-['#969cb3'] py-4 bg-black px-8 text-left leading-6">
          Valor
        </span>
        <span className="'text-['#969cb3'] py-4 bg-black px-8 text-left leading-6">
          Categoria
        </span>
        <span className="'text-['#969cb3'] py-4 bg-black px-8 text-left leading-6">
          Data
        </span>
      </div>
      {transactions.map((transaction, index) => (
        <div key={index} className="w-full grid grid-cols-4">
          <span className="px-8 py-4 border-0 text-['#363f5f']">
            {transaction.title}
          </span>
          <span
            className={`px-8 py-4 border-0 text-['#969cb3'] ${
              transaction.type === 'deposit' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(transaction.amount)}
          </span>
          <span className="px-8 py-4 border-0 text-['#969cb3']">
            {transaction.category}
          </span>
          <span className="px-8 py-4 border-0 text-['#969cb3']">
            {new Intl.DateTimeFormat('pt-BR').format(
              new Date(transaction.createdAt)
            )}
          </span>
        </div>
      ))}
    </div>
  )
}
