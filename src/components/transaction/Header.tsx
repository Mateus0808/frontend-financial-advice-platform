interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export function TransactionHeader({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <header className="bg-blue-800">
      <div className="max-w-[1180px] m-auto pt-8 flex items-center justify-between">
        <button
          className="text-base text-white bg-blue-300 border-0 py-0 px-8 rounded h-12 transition ease-in-out"
          type="button"
          onClick={onOpenNewTransactionModal}
        >
          Nova transação
        </button>
      </div>
    </header>
  )
}
