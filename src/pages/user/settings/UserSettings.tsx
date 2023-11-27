import { Sidebar } from '../../../components/Sidebar'
import { ProfileLink } from '../../../components/user/ProfileLink'

export const UserSettings = () => {
  return (
    <div className="flex min-h-screen bg-[#121214]">
      <Sidebar />
      <div className="flex-1 max-w-[1180px] min-h-screen p-5 flex flex-col w-full m-auto items-start">
        <div className="w-full flex flex-col p-8 gap-4">
          <h3 className="text-white font-bold text-2xl">Configurações do usuário</h3>
          <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ProfileLink
              title="Informações do usuário"
              path="/home/perfil"
              description="Editar informações do usuário, como: nome, e-mail..."
            />

            <ProfileLink
              title="Notificações"
              path="/notificacoes"
              description="Ativar ou desativar notificações do usuário"
            />

            <ProfileLink
              title="Segurança e Privacidade"
              path="/seguranca-e-privacidade"
              description="Editar informações de segurança e privacidade"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
