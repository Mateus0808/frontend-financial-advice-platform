import { useTransactions } from '../../hooks/useTransaction'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposit += transaction.amount
      } else {
        acc.withdraw += transaction.amount
      }
      acc.total = acc.deposit - acc.withdraw
      return acc
    },
    {
      deposit: 0,
      withdraw: 0,
      total: 0,
    }
  )

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div className="bg-black py-6 px-4 border rounded text-white">
        <header className="flex items-center justify-between">
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong className="whitespace-nowrap block mt-4 text-2xl leading-10 md:text-3xl">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.deposit)}
        </strong>
      </div>
      <div className='bg-black py-6 px-4 border rounded text-white'>
        <header className="flex items-center justify-between">
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong className="whitespace-nowrap block mt-4 text-2xl leading-10">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(-summary.withdraw)}
        </strong>
      </div>
      <div className="bg-green-600 text-white py-6 px-4 border rounded">
        <header className="flex items-center w-full justify-between">
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong className="whitespace-nowrap block mt-4 text-2xl leading-10">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}
        </strong>
      </div>
    </div>
  )
}
