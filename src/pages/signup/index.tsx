import { Form } from '@unform/web'
import { Label } from '../../components/Label'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { Button } from '../../components/Button'
import { useAuthenticated } from '../../contexts/AuthContext'
import { useRef } from 'react'
// import { useNavigate } from 'react-router-dom'
import { createUserService } from '../../services/user/create-user.service'
import { errorNotify } from '../../utils/notify'
import { CreateUserParams } from '../../services/user/type/create-user.interface'

export const SignUp = () => {
  const { signIn, loading } = useAuthenticated()
  const formRef = useRef(null)
  // const navigate = useNavigate()

  async function handleSubmit(data: CreateUserParams) {
    const createdUser = await createUserService(data)
    if (createdUser.error) {
      console.log('createdUser', createdUser)
      errorNotify('Erro ao criar usuário')
      return
    }
    await signIn({
      email: createdUser.data.email,
      password: data.password,
    })
  }

  return (
    <div className="max-w-[1120px] bg-primary-gradient-top m-auto py-0 px-8 flex justify-center items-center h-screen">
      <div className="min-h-[524px] flex bg-[#2563eb] bg-opacity-50">
        <div className="w-80 rounded-lg shadow-md flex flex-col justify-around items-center">
          <img
            src="/login.png"
            alt="Login"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-[640px] bg-white p-12 shadow-md flex items-center justify-center">
          <Form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex w-full flex-col"
          >
            <h1 className="text-2xl font-semibold mb-6 text-center">
              REGISTRAR USUÁRIO
            </h1>
            <div className="flex flex-col">
              <div className="flex w-full gap-6">
                <div className="mb-4 w-full">
                  <Label label="Nome" htmlFor="name" />
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Digite seu nome..."
                  />
                </div>
                <div className="mb-4 w-full">
                  <Label label="Sobrenome" htmlFor="surname" />
                  <Input
                    type="text"
                    id="surname"
                    name="surname"
                    placeholder="Sobrenome..."
                  />
                </div>
              </div>
              <div className="flex w-full gap-6">
                <div className="mb-4 w-full">
                  <Label label="Nome de usuário" htmlFor="username" />
                  <Input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Digite seu nome de usuário..."
                  />
                </div>
                <div className="mb-4 w-full">
                  <Label label="Gênero" htmlFor="gender" />
                  <Select id="gender" name="gender">
                    <option value="">Selecione o gênero...</option>
                    <option value="MALE">Masculino</option>
                    <option value="FEMALE">Feminino</option>
                    <option value="OTHER">Outro</option>
                  </Select>
                </div>
              </div>
              <div className="flex w-full gap-6">
                <div className="mb-4 w-full">
                  <Label label="Data de nascimento" htmlFor="birthDate" />
                  <Input
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    placeholder="Data de nascimento..."
                  />
                </div>
                <div className="mb-4 w-full">
                  <Label label="Nível de educação" htmlFor="educationLevel" />
                  <Select id="educationLevel" name="educationLevel">
                    <option value="">Nível de educação...</option>
                    <option value="MALE">Ensino Fundamental</option>
                    <option value="FEMALE">Ensino Médio</option>
                    <option value="OTHER">Graduação</option>
                    <option value="OTHER">Especialização</option>
                    <option value="OTHER">Mestrado</option>
                    <option value="OTHER">Doutorado</option>
                  </Select>
                </div>
              </div>
              <div className="flex w-full gap-6">
                <div className="mb-4 w-full">
                  <Label label="E-mail" htmlFor="email" />
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Digite seu e-mail..."
                  />
                </div>
                <div className="mb-4 w-full">
                  <Label label="Senha" htmlFor="password" />
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Senha..."
                  />
                </div>
              </div>
            </div>
            <div className="mb-4 gap-4 flex flex-col items-center justify-between">
              {loading ? (
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Carregando...
                </button>
              ) : (
                <Button title="CADASTRAR" type="submit" />
              )}
              <div className='flex justify-center items-center w-full relative'>
                <span className='dashed-line-left'></span>
                <span className='text-[#4b5563]'>ou</span>
                <span className='dashed-line-right'></span>
              </div>
              <a className='h-12 bg-transparent w-full flex items-center justify-center border-2 rounded' href="">Fazer login</a>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}
