import { Form } from '@unform/web'
import { useRef } from 'react'
import { Label } from '../../../../components/Label'
import { Button } from '../../../../components/Button'

export const Address = () => {
  const formRef = useRef(null)

  return (
    <div className="flex p-8 flex-col rounded bg-[#202024]">
      <h1 className=" text-white font-bold text-xl">Endereço</h1>
      <Form
        ref={formRef}
        className="w-full pt-7 rounded flex flex-col gap-6"
        onSubmit={() => {}}
      >
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          <div className="">
            <Label label="Cidade" htmlFor="city" />
            <input
              type="text"
              className="w-full text-white text-md h-14 rounded px-4 bg-[#121214] focus:outline-none focus:ring-2 focus:ring-primary-border"
              defaultValue={'Natal'}
            />
          </div>
          <div className="">
            <Label label="UF" htmlFor="uf" />
            <input
              type="text"
              className="w-full text-white text-md h-14 rounded px-4 bg-[#121214] focus:outline-none focus:ring-2 focus:ring-primary-border"
              defaultValue={'RN'}
            />
          </div>
          <div className="">
            <Label label="Rua" htmlFor="street" />
            <input
              type="text"
              className="w-full text-white text-md h-14 rounded px-4 bg-[#121214] focus:outline-none focus:ring-2 focus:ring-primary-border"
              defaultValue={'Rua alves da silva'}
            />
          </div>

          <div className="">
            <Label label="Complemento" htmlFor="complement" />
            <input
              type="text"
              className="w-full text-white text-md h-14 rounded px-4 bg-[#121214] focus:outline-none focus:ring-2 focus:ring-primary-border"
              defaultValue={'Casa'}
            />
          </div>

          <div className="">
            <Label label="Bairro" htmlFor="neightbord" />
            <input
              type="text"
              className="w-full text-white text-md h-14 rounded px-4 bg-[#121214] focus:outline-none focus:ring-2 focus:ring-primary-border"
              defaultValue={'Lagoa Nova'}
            />
          </div>

          <div>
            <Label label="Número" htmlFor="number" />
            <input
              type="number"
              className="w-full text-white text-md h-14 rounded px-4 bg-[#121214] focus:outline-none focus:ring-2 focus:ring-primary-border"
              defaultValue={'389'}
            />
          </div>

          <div>
            <Label label="CEP" htmlFor="postalCode" />
            <input
              type="text"
              className="w-full text-white text-md h-14 rounded px-4 bg-[#121214] focus:outline-none focus:ring-2 focus:ring-primary-border"
              defaultValue={'69076-820'}
            />
          </div>

          <div>
            <Label label="País" htmlFor="country" />
            <input
              type="text"
              className="w-full text-white text-md h-14 rounded px-4 bg-[#121214] focus:outline-none focus:ring-2 focus:ring-primary-border"
              defaultValue={'Brasil'}
            />
          </div>
        </div>

        <div className="w-[154px] h-12 flex items-center justify-start">
          <Button title="Salvar" type="submit" />
        </div>
      </Form>
    </div>
  )
}
