import { Form } from '@unform/web'
import { useNavigate } from 'react-router-dom'
import { Label } from '../../components/Label'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useAuthenticated } from '../../contexts/AuthContext'
import { Navbar } from '../../components/Navbar'
import { useRef } from 'react'

interface LoginProps {
  login: string
  password: string
}

export const Login = () => {
  const navigate = useNavigate()
  const formRef = useRef(null)
  const { signIn } = useAuthenticated()

  const handleSubmit = async (data: LoginProps) => {
    console.log('formRef', data)
    await signIn(data)
  }

  return (
    <>
      <Navbar />
      <div className="max-w-[1180px] p-5 m-auto items-center justify-center h-[calc(100%-120px)]">
        <div className="min-h-[524px] h-full flex bg-opacity-50">
          <div className="hidden w-full md:block bg-red-500 rounded-lg shadow-md">
            <img
              src="/login.png"
              alt="Login"
              className="h-full bg-red-300 object-cover"
            />
          </div>
          <div className="w-full bg-white rounded md:rounded-none p-6 shadow-md flex items-center justify-center">
            <Form ref={formRef} onSubmit={handleSubmit} className="w-96">
              <h2 className="text-2xl text-gray-700 font-semibold mb-6 text-center">
                FAÇA LOGIN
              </h2>
              <div className="mb-4">
                <Label label="Email" htmlFor="login" />
                <Input
                  type="email"
                  id="login"
                  name="login"
                  placeholder="test@example.com"
                />
              </div>
              <div className="mb-6">
                <Label label="Senha" htmlFor="password" />
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="****"
                />
              </div>

              <div className="flex-col items-center justify-between">
                <div className="h-12">
                  <Button title="ENTRAR" type="submit" />
                </div>
                <div className="flex justify-between mt-2">
                  <a
                    href="#"
                    className="text-sm font-bold text-primary hover:text-primary-hover rounded-md focus:outline-none focus:ring-2 focus:ring-primary-hover"
                  >
                    Esqueceu a senha?
                  </a>
                  <button
                    onClick={() => navigate('/signup')}
                    type="submit"
                    className="text-sm font-bold text-primary hover:text-primary-hover rounded-md focus:outline-none focus:ring-2 focus:ring-primary-hover"
                  >
                    Registre-se
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}
