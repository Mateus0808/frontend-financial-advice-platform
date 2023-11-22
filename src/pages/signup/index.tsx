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
import { Navbar } from '../../components/Navbar'

export const SignUp = () => {
  const { signIn } = useAuthenticated()
  const formRef = useRef(null)
  // const navigate = useNavigate()

  async function handleSubmit(data: CreateUserParams) {
    const createdUser = await createUserService(data)
    if (createdUser.error) {
      errorNotify('Erro ao criar usuário')
      return
    }
    console.log('createdUser', createdUser)
    await signIn({
      login: createdUser.data.login,
      password: data.password,
    })
  }

  return (
    <>
      <Navbar />
      <div className="max-w-[1180px] p-5 m-auto items-center justify-center">
        <div className="min-h-[524px] h-full flex bg-opacity-50">
          <div className="hidden w-full md:block bg-red-500 rounded-lg shadow-md">
            <img
              src="/login.png"
              alt="Login"
              className="h-full bg-red-300 object-cover"
            />
          </div>
          <div className="bg-white w-full rounded p-6 md:p-12 shadow-md flex items-center justify-center md:min-w-[648px]">
            <Form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex w-full flex-col"
            >
              <h1 className="text-2xl text-gray-600 font-semibold mb-6 text-center">
                REGISTRAR USUÁRIO
              </h1>
              <div className="flex flex-col gap-5">
                <div className="grid w-full gap-5 md:grid-cols-2">
                  <div>
                    <Label label="Nome" htmlFor="name" />
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Digite seu nome..."
                    />
                  </div>
                  <div>
                    <Label label="Sobrenome" htmlFor="surname" />
                    <Input
                      type="text"
                      id="surname"
                      name="surname"
                      placeholder="Sobrenome..."
                    />
                  </div>
                </div>
                <div className="grid w-full gap-5 md:grid-cols-2">
                  <div>
                    <Label label="Nome de usuário" htmlFor="username" />
                    <Input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Digite seu nome de usuário..."
                    />
                  </div>
                  <div>
                    <Label label="Gênero" htmlFor="gender" />
                    <Select id="gender" name="gender">
                      <option value="">Selecione o gênero...</option>
                      <option value="MALE">Masculino</option>
                      <option value="FEMALE">Feminino</option>
                      <option value="OTHER">Outro</option>
                    </Select>
                  </div>
                </div>
                <div className="grid w-full gap-5 md:grid-cols-2">
                  <div>
                    <Label label="Data de nascimento" htmlFor="birthDate" />
                    <Input
                      type="date"
                      id="birthDate"
                      name="birthDate"
                      placeholder="Data de nascimento..."
                    />
                  </div>
                  <div>
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
                <div className="grid w-full gap-5 md:grid-cols-2">
                  <div>
                    <Label label="E-mail" htmlFor="login" />
                    <Input
                      type="email"
                      id="login"
                      name="login"
                      placeholder="Digite seu e-mail..."
                    />
                  </div>
                  <div>
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
              <div className="mt-5 gap-4 flex flex-col items-center justify-between">
                <div className="h-12 w-full">
                  <Button title="CADASTRAR" type="submit" />
                </div>
                <div className="flex justify-center items-center w-full relative">
                  <span className="dashed-line-left"></span>
                  <span className="text-sm font-bold text-[#4b5563]">OU</span>
                  <span className="dashed-line-right"></span>
                </div>
                <span className="flex text-gray-600 font-bold whitespace-nowrap gap-1 items-center justify-center">
                  Já possui uma conta?
                  <a
                    className="h-12 w-full text-primary font-bold flex items-center justify-center transition ease-in-out hover:underline"
                    href="/login"
                  >
                    Faça login
                  </a>
                </span>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}
