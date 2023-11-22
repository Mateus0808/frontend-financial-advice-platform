import { Form } from '@unform/web'
import { Label } from '../Label'
import { useRef } from 'react'
import { Button } from '../Button'
import { AiOutlineClose } from 'react-icons/ai'
import { IconContext } from 'react-icons'

export type MyProps = {
  setShowModal: (open: boolean) => void
}
export const ModalMyAccess = ({ setShowModal }: MyProps) => {
  const formRef = useRef(null)

  return (
    <>
      <div className="bg-black bg-opacity-50 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full my-6 mx-auto max-w-md max-h-[90vh]">
          <div className="border-0 p-8 rounded-lg shadow-lg relative flex flex-col w-full bg-[#202024] outline-none focus:outline-none">
            <div className="flex items-start justify-between">
              <h3 className="text-2xl w-full flex justify-center items-center  text-white font-semibold">
                Alterar senha
              </h3>
              <button
                className="group p-1 transition-all hover:bg-black hover:bg-opacity-20 rounded ml-auto absolute right-5 top-5 border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <IconContext.Provider
                  value={{
                    className: 'fill-gray-400 group-hover:fill-white h-8 w-8',
                  }}
                >
                  <AiOutlineClose />
                </IconContext.Provider>
              </button>
            </div>

            <div className="relative flex-auto">
              <Form
                ref={formRef}
                className="my-4 w-full rounded grid grid-cols-1 gap-4"
                onSubmit={() => {}}
              >
                <div className="">
                  <Label label="Senha atual" />
                  <input
                    type="password"
                    className="w-full text-white text-md h-12 rounded px-4 bg-[#121214] focus:outline-none focus:ring-2 focus:ring-primary-border"
                  />
                </div>
                <div className="">
                  <Label label="Nova senha" />
                  <input
                    type="password"
                    className="w-full text-white text-md h-12 rounded px-4 bg-[#121214] focus:outline-none focus:ring-2 focus:ring-primary-border"
                  />
                </div>
                <div className="">
                  <Label label="Confirmar senha" />
                  <input
                    type="password"
                    className="w-full text-white text-md h-12 rounded px-4 bg-[#121214] focus:outline-none focus:ring-2 focus:ring-primary-border"
                  />
                </div>
              </Form>
            </div>

            <div className="flex items-center h-12 justify-end">
              <Button title="Confirmar" />
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}
