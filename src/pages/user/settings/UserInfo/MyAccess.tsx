import { useRef } from 'react'
import { Form } from '@unform/web'
import { Label } from '../../../../components/Label'
import { Button } from '../../../../components/Button'

export type MyAccessProps = {
  handleOpenPasswordModal: () => void
}

export const MyAccess = (props: MyAccessProps) => {
  const { handleOpenPasswordModal } = props
  const formRef = useRef(null)

  return (
    <div className="flex flex-col gap-8 flex-1 min-w-0 mt-9">
      <div className="flex p-8 flex-col rounded bg-[#202024] ">
        <h1 className=" text-white font-bold text-xl">Meu Acesso</h1>
        <Form
          ref={formRef}
          className="w-full pt-7 rounded grid grid-cols-1 gap-7"
          onSubmit={() => {}}
        >
          <div className="">
            <Label label="E-mail de cadastro" />
            <div className="px-4 flex rounded bg-[#29292e] h-14 justify-between items-center">
              <span className="flex text-md font-medium text-white ">
                loiolamateus7@gmail.com
              </span>
              <button className="text-primary font-bold text-sm rounded px-4 focus:outline-none focus:ring-2 focus:ring-primary-border">
                ALTERAR
              </button>
            </div>
          </div>
          <div className="">
            <Label label="Senha" />
            <div className="px-4 flex rounded bg-[#29292e] h-14 justify-between items-center">
              <span className="text-md font-medium text-white">
                ***************
              </span>
              <button
                onClick={handleOpenPasswordModal}
                className="text-primary font-bold text-sm rounded px-4"
              >
                ALTERAR
              </button>
            </div>
          </div>

          <div className="">
            <Label label="CPF" />
            <div className="px-4 flex rounded bg-[#29292e] h-14 justify-between items-center">
              <span className="flex text-md font-medium text-white ">
                016.958.895-85
              </span>
              <button className="text-primary font-bold text-sm rounded px-4">
                ALTERAR
              </button>
            </div>
          </div>

          <div className="w-[154px] h-12 flex items-center justify-start">
            <Button title="Salvar" type="submit" />
          </div>
        </Form>
      </div>
    </div>
  )
}
