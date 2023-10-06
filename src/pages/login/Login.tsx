import { Form } from '@unform/web'
import { useNavigate } from 'react-router-dom'
import { Label } from '../../components/Label'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

interface LoginProps {
  email: string
  password: string
}

export const Login = () => {
  const navigate = useNavigate()

  const handleSubmit = async (data: LoginProps) => {
    console.log(data)
  }

  return (
    <div className="max-w-[1120px] bg-primary-gradient-top m-auto py-0 px-8 flex justify-center items-center h-screen">
      <div className="min-h-[524px] flex bg-[#2563eb] bg-opacity-50">
        <div className="w-80 rounded-lg shadow-md flex flex-col justify-around items-center">
          <img src="/login.png" alt="Login" className='h-full w-full object-cover' />
        </div>
        <div className="w-[524px] bg-white p-6 shadow-md flex items-center justify-center">
          <Form onSubmit={handleSubmit} className="w-96">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              FAÇA LOGIN
            </h2>
            <div className="mb-4">
              <Label label="Email" htmlFor="email" />
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <Label label="Password" htmlFor="password" />
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
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
  )
}
