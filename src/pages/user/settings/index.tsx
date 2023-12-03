import { LinkSetting } from "../../../components/user/ProfileLink";
import { DefaultContainer } from "../DefaultContainer";

export const UserSettings = () => {
	return (
		<DefaultContainer>
			<h3 className="font-bold text-gray-600 text-3xl">
				Configurações do usuário
			</h3>
			<div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
				<LinkSetting
					title="Informações do usuário"
					path="/home/configuracoes/perfil"
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
		</DefaultContainer>
	);
};
