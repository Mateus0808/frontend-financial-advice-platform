import { Form } from '@unform/web'
import { useRef } from 'react'
import { Label } from '../../../components/Label'
import { Button } from '../../../components/Button'
import { CardContainer } from './CardContainer'
import { UserInput } from '../../../components/user/UserInput'

export const Address = () => {
  const formRef = useRef(null)

  return (
    <CardContainer id="address">
      <h1 className="text-gray-600 font-bold text-xl">Endereço</h1>
      <Form
        ref={formRef}
        className="w-full pt-7 rounded flex flex-col gap-6"
        onSubmit={() => {}}
      >
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          <div className="">
            <Label label="Cidade" htmlFor="city" />
            <UserInput
							name='city'
              type="text"
              defaultValue={'São Paulo'}
            />
          </div>
          <div className="">
            <Label label="UF" htmlFor="uf" />
            <UserInput
							name='uf'
              type="text"
              defaultValue={'SP'}
            />
          </div>
          <div className="">
            <Label label="Rua" htmlFor="street" />
            <UserInput
							name='street'
              type="text"
              defaultValue={'Rua A'}
            />
          </div>

          <div className="">
            <Label label="Complemento" htmlFor="complement" />
						<UserInput
							name='complement'
              type="text"
              defaultValue={'Casa'}
            />
          </div>

          <div className="">
            <Label label="Bairro" htmlFor="neightbord" />
						<UserInput
							name='neightbord'
              type="text"
              defaultValue={'Lagoa Nova'}
            />
          </div>

          <div>
            <Label label="Número" htmlFor="number" />
						<UserInput
							name='number'
              type="text"
              defaultValue={'389'}
            />
          </div>

          <div>
            <Label label="CEP" htmlFor="postalCode" />
            <UserInput
							name='postalCode'
              type="text"
              defaultValue={'69076-820'}
            />
          </div>

          <div>
            <Label label="País" htmlFor="country" />
						<UserInput
							name='country'
              type="text"
              defaultValue={'Brasil'}
            />
          </div>
        </div>

        <div className="w-[154px] h-12 flex items-center justify-start">
          <Button title="Salvar" type="submit" />
        </div>
      </Form>
    </CardContainer>
  )
}
