import { Navbar } from "../../components/navbar";

type SpanProps = {
	children: string;
};

const Span = ({ children }: SpanProps) => (
	<span className="flex text-gray-500 text-lg font-bold mb-4">{children}</span>
);

const Paragraph = ({ children }: SpanProps) => (
	<p className="text-justify text-base text-gray-500">{children}</p>
);

export const About = () => {
	return (
		<div className="max-w-[1180px] w-full m-auto flex flex-col gap-4 px-8 py-8">
			<div>
				<Span>
					Bem-Vindo à nossa Plataforma de Aconselhamento Financeiro para Jovens
				</Span>
				<Paragraph>
					Na Plataforma de Aconselhamento Financeiro para Jovens, nossa missão é
					capacitar indivíduos a tomar decisões financeiras informadas,
					oferecendo orientação especializada e recursos educacionais para uma
					jornada financeira mais saudável e segura.
				</Paragraph>
			</div>
			<div>
				<Span>Nosso Compromisso</Span>
				<Paragraph>
					Acreditamos que a educação financeira é a chave para uma vida
					financeira próspera. Nossa plataforma foi projetada para ser um espaço
					acolhedor e informativo, independentemente do seu nível de
					conhecimento sobre finanças. Estamos comprometidos em fornecer
					recursos acessíveis e práticos que ajudem a transformar conhecimento
					em ação, capacitando-o a alcançar suas metas financeiras.
				</Paragraph>
			</div>
			<div>
				<Span>O Que Oferecemos</Span>
				<Paragraph>
					Na Plataforma de Aconselhamento Financeiro para Jovens, você
					encontrará uma ampla gama de recursos:
				</Paragraph>
				<ul className="list-disc px-8">
					<li className="text-justify text-base text-gray-500">
						Educação Financeira Abrangente: Cursos, artigos, vídeos e
						ferramentas interativas para fortalecer sua compreensão sobre
						conceitos financeiros essenciais.
					</li>
					<li className="text-justify text-base text-gray-500">
						Aconselhamento Personalizado: Consultas individuais com nossos
						especialistas para orientação financeira personalizada.
					</li>
					<li className="text-justify text-base text-gray-500">
						Rastreamento de Metas e Orçamentos: Ferramentas intuitivas para
						ajudá-lo a definir, acompanhar e alcançar suas metas financeiras.
					</li>
				</ul>
			</div>
			<div>
				<Span>Junte-se à Nossa Comunidade</Span>
				<Paragraph>
					Ao se juntar à Plataforma de Aconselhamento Financeiro para Jovens,
					você faz parte de uma comunidade que valoriza o aprendizado contínuo e
					a prosperidade financeira. Estamos aqui para apoiá-lo em cada etapa de
					sua jornada financeira.
				</Paragraph>
			</div>
			<div>
				<Span>Contate-Nos</Span>
				<Paragraph>
					Se você tiver dúvidas, sugestões ou simplesmente deseja se envolver
					mais com nossos recursos, não hesite em entrar em contato conosco.
					Estamos aqui para ajudar!
				</Paragraph>
			</div>
			<div>
				<Paragraph>
					Obrigado por escolher a nossa plataforma para seu crescimento
					financeiro.
				</Paragraph>
			</div>
		</div>
	);
};
