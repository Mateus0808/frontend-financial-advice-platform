import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import { darken, transparentize } from 'polished'

// import { useTransactions } from '../../hooks/useTransactions'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

Modal.setAppElement('#root')

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  // const { createTransaction } = useTransactions()

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    // await createTransaction({ title, amount, category, type })

    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')

    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar" />
      </button>

      <form onSubmit={handleCreateNewTransaction}>
        <h2 className='text-2xl mb-8 font-bold text-center'>Cadastrar transação</h2>

        <div className='flex flex-col gap-4'>
          <input
            placeholder="Título"
            value={title}
            className="w-full px-6 h-14 rounded border border-solid border-['#d7d7d7'] text-black bg-['#e7e9ee']"
            onChange={(event) => setTitle(event.target.value)}
          />

          <input
            type="number"
            value={amount}
            className="w-full px-6 h-14 rounded border border-solid text-black border-['#d7d7d7'] bg-['#e7e9ee']"
            onChange={(event) => setAmount(Number(event.target.value))}
          />
        </div>

        <div className="my-4 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setType('deposit')}
            className={`h-14 border border-solid border-['#d7d7d7'] rounded ${
              type === 'deposit' ? 'bg-green-400 opacity-90' : 'transparent'
            } flex justify-center items-center transition hover:border-[${darken(
              0.1,
              '#d7d7d7'
            )}]`}
          >
            <img className="h-5 w-5" src={incomeImg} alt="Entrada" />
            <span className="inline-block ml-4 text-base text-white">
              Entrada
            </span>
          </button>

          <button
            type="button"
            onClick={() => setType('withdraw')}
            className={`h-14 border border-solid border-[#d7d7d7] rounded ${
              type === 'withdraw' ? 'bg-red-400 opacity-90' : 'transparent'
            } flex justify-center items-center transition hover:border-[${darken(
              0.1,
              '#d7d7d7'
            )}]`}
          >
            <img className="h-5 w-5" src={outcomeImg} alt="Saída" />
            <span className="inline-block ml-4 text-base text-white">
              Saída
            </span>
          </button>
        </div>

        <input
          placeholder="Categoria"
          value={category}
          className="w-full px-6 h-14 rounded text-black border border-solid border-['#d7d7d7'] bg-['#e7e9ee']"
          onChange={(event) => setCategory(event.target.value)}
        />

        <button
          className="w-full px-6 h-14 bg-primary text-white rounded mt-6 font-semibold transition ease-in-out hover:brightness-90"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </Modal>
  )
}
