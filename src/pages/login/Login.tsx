import { Form } from '@unform/web'
import { useNavigate } from 'react-router-dom'
import { Label } from '../../components/Label'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useAuthenticated } from '../../contexts/AuthContext'
import { Navbar } from '../../components/Navbar'

interface LoginProps {
  email: string
  password: string
}

export const Login = () => {
  const navigate = useNavigate()
  const { signIn } = useAuthenticated()

  const handleSubmit = async (data: LoginProps) => {
    console.log(data)
    await signIn(data)
  }

  return (
    <>
      <Navbar />
      <div className="max-w-[1120px] m-auto py-0 px-8 flex justify-center items-center h-[calc(100%-120px)]">
        <div className="min-h-[524px] mt-8 flex justify-center">
          <div className="w-80 rounded-lg shadow-md flex flex-col justify-around items-center">
            <img
              src="/login.png"
              alt="Login"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-[524px] bg-white p-6 shadow-md flex items-center justify-center">
            <Form onSubmit={handleSubmit} className="w-96">
              <h2 className="text-2xl text-gray-700 font-semibold mb-6 text-center">
                FAÇA LOGIN
              </h2>
              <div className="mb-4">
                <Label label="Email" htmlFor="email" />
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="test@example.com"
                />
              </div>
              <div className="mb-6">
                <Label label="Password" htmlFor="password" />
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Senha"
                />
              </div>

              <div className="flex-col items-center justify-between">
                <Button title="ENTRAR" type="submit" />
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
