import { Form } from "@unform/web"
import { Button } from "../../../../components/Button"
import { Label } from "../../../../components/Label"
import { SelectProfile } from "../../../../components/user/SelectProfile"
import { useRef } from "react"

export const PersonalInfo = () => {
  const formRef = useRef(null)

  return (
    <div className="flex p-8 flex-col rounded bg-[#202024]">
      <h1 className=" text-white font-bold text-xl">Informações Pessoal</h1>
      <Form
        ref={formRef}
        className="w-full pt-7 rounded grid grid-cols-1 gap-7 md:grid-cols-2"
        onSubmit={() => {}}
      >
        <div className="">
          <Label label="Nome" htmlFor="name" />
          <input
            type="text"
            className="w-full text-white text-md h-14 rounded px-4 bg-[#121214] focus:outline-none focus:ring-2 focus:ring-primary-border"
            defaultValue={'Mateus'}
          />
        </div>
        <div className="">
          <Label label="Sobrenome" htmlFor="surname" />
          <input
            type="text"
            className="w-full text-white text-md h-14 rounded px-4 bg-[#121214] focus:outline-none focus:ring-2 focus:ring-primary-border"
            defaultValue={'dos Santos Loiola'}
          />
        </div>

        <div>
          <Label label="Nome de usuário" htmlFor="username" />
          <input
            type="text"
            className="w-full text-white text-md h-14 rounded px-4 bg-[#121214] focus:outline-none focus:ring-2 focus:ring-primary-border"
            defaultValue={'mateus08'}
          />
        </div>
        <div>
          <Label label="Gênero" htmlFor="gender" />
          <SelectProfile id="gender" name="gender">
            <option value="">Selecione o gênero...</option>
            <option value="MALE">Masculino</option>
            <option value="FEMALE">Feminino</option>
            <option value="OTHER">Outro</option>
          </SelectProfile>
        </div>

        <div className="w-[154px] h-14 flex items-center justify-start">
          <Button title="Salvar" type="submit" />
        </div>
      </Form>
    </div>
  )
}
