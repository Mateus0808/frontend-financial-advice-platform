import { Sidebar } from '../Sidebar'
import { Summary } from './Summary'
import { TransactionsTable } from './TransactionsTable'

export function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#121214]">
      <Sidebar />
      <main className="max-w-[1180px] w-full mx-auto px-4 lg:px-8 py-10">
        <Summary />
        <TransactionsTable />
      </main>
    </div>
  )
}
