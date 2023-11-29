import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../contexts/UseTransaction'

export function Summary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.transactionType === 'DEPOSIT') {
        acc.deposit += transaction.value
      } else {
        acc.withdraw += transaction.value
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
      <div className="bg-gray-300 py-6 px-4 border rounded text-white">
        <header className="flex items-center justify-between">
          <p className='text-black font-semibold'>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong className="whitespace-nowrap text-black font-semibold block mt-4 text-2xl leading-10 md:text-3xl">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.deposit)}
        </strong>
      </div>
      <div className='bg-gray-300 py-6 px-4 border rounded text-white'>
        <header className="flex items-center justify-between">
          <p className='text-black font-semibold'>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong className="whitespace-nowrap text-black font-semibold block mt-4 text-2xl leading-10">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(-summary.withdraw)}
        </strong>
      </div>
      <div className={`text-white py-6 px-4 border rounded ${summary.total >= 0 ? 'bg-green-600' : 'bg-red-600'}`}>
        <header className="flex items-center w-full justify-between">
          <p className='font-semibold'>Total</p>
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
