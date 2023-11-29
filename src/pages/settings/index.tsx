import { Sidebar } from '../../components/Sidebar'
import { LinkSetting } from '../../components/user/ProfileLink'

export const UserSettings = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="max-w-[1180px] min-h-screen p-5 flex flex-col w-full m-auto items-start">
        <div className="w-full flex flex-col p-8 gap-4">
          <h3 className="font-bold text-gray-600 text-2xl">Configurações do usuário</h3>
          <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
            <LinkSetting
              title="Informações do usuário"
              path="/home/perfil"
              description="Editar informações do usuário, como: nome, e-mail..."
            />

            <LinkSetting
              title="Notificações"
              path="/notificacoes"
              description="Ativar ou desativar notificações do usuário"
            />

            <LinkSetting
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
