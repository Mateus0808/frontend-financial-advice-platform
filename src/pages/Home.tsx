import { Button } from "../components/Button";
import { Navbar } from "../components/navbar";

import localLibrary from "../assets/local_library.svg";
import receiptLong from "../assets/receipt_long.svg";
import tracking from "../assets/tracking.svg";
import rewardIcon from "../assets/rewards.svg";
import { Outlet } from "react-router-dom";

export const Home = () => {
	return (
		<>
			<div className="w-full mt-10">
				<div className="max-w-[1180px] w-full min-h-[772px] md:items-center m-auto p-8 flex flex-col md:flex-row-reverse gap-12">
					<div className="border-2 border-green-500 rounded h-96 md:w-1/2">
						<img
							className="h-full w-full object-cover rounded"
							src="/background-home.jpeg"
							alt=""
						/>
					</div>
					<div className="w-full md:w-1/2 md:justify-center flex flex-col gap-8">
						<h3 className="text-4xl font-bold text-left">
							Seja Mestre das Suas Finanças
						</h3>
						<p className="text-left text-lg">
							Bem-vindo à nossa plataforma de aconselhamento financeiro, onde
							sua jornada para o sucesso financeiro começa.
						</p>
						<div className="max-w-[24rem] w-full h-14 rounded">
							<Button title="Inicie sua jornada na plataforma" />
						</div>
					</div>
				</div>
			</div>
			<div className="relative">
				<div className="relative">
					<img
						className="h-[50rem] md:h-[40rem] object-cover w-full"
						src="/banner_.jpg"
						alt=""
					/>
					<div className="absolute h-[40rem] w-full top-0 left-0 bg-black opacity-40"></div>
				</div>
				<div className="max-w-[1180px] m-auto absolute w-full p-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<div className="flex flex-col gap-8 text-left">
						<span className="text-white text-center md:text-left text-lg font-bold">
							Somos uma plataforma completa para o
							<h3 className="text-5xl font-bold text-white">
								Planejamento Financeiro Pessoal
							</h3>
						</span>
						<p className="text-white text-base max-w-[880px]">
							Acreditamos que o planejador financeiro independente é o
							profissional mais capacitado para acolher e atender famílias
							proporcionando os melhores resultados a partir de todos os
							aspectos das finanças pessoais.
						</p>
						<p className="text-white text-base max-w-[880px]">
							Por isso, mais do que tecnologia, o Pafy é uma plataforma completa
							que busca fomentar e profissionalizar a carreira de planejadores
							financeiros pessoais independentes de todo o Brasil.
						</p>
					</div>
					<div className="mt-8 grid gap-8 grid-cols-2 md:grid-cols-4">
						<div className="flex flex-col gap-4 items-center">
							<img className="h-16" src={localLibrary} alt="" />
							<span className="font-bold text-center text-white">
								Aprendizado contínuo
							</span>
						</div>
						<div className="flex flex-col gap-4 items-center">
							<img className="h-16" src={receiptLong} alt="" />
							<span className="font-bold text-center text-white">
								Gerenciamento de Transações
							</span>
						</div>
						<div className="flex flex-col gap-4 items-center">
							<img className="h-16" src={tracking} alt="" />
							<span className="font-bold text-center text-white">
								Metas e Orçamento
							</span>
						</div>
						<div className="flex flex-col gap-4 items-center">
							<img className="h-16" src={rewardIcon} alt="" />
							<span className="font-bold text-center text-white">
								Recompensas
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="max-w-[1180px] p-5 mt-12 flex flex-col w-full m-auto items-start justify-between">
				<div className="w-full">
					<h1 className="text-black text-3xl font-bold mb-4">
						Recursos e Benefícios
					</h1>
					<div className="flex flex-col gap-8">
						<div className="w-full mt-6 flex flex-col items-center justify-center md:flex-row md:gap-8">
							<img
								className="h-60 w-60 object-cover md:h-72 md:w-72"
								src="/metas-financeiras.png"
								alt=""
							/>
							<div className="pt-4 h-full md:h-72 flex flex-col justify-center gap-3">
								<h3 className="font-bold text-2xl">Rastreamento de Meta</h3>
								<p className="flex items-center justify-center font-medium text-justify">
									Defina metas financeiras pessoais e mantenha o controle do seu
									progresso. Quer economizar para uma grande viagem ou realizar
									um sonho? Nossa plataforma facilita o planejamento e o
									acompanhamento das suas metas financeiras. Visualize seu
									progresso de maneira clara e motive-se a atingir seus
									objetivos.
								</p>
							</div>
						</div>
						<div className="w-full mt-6 flex flex-col items-center justify-center md:flex-row md:gap-8">
							<img
								className="h-60 w-60 object-cover md:h-72 md:w-72"
								src="/financial-education.png"
								alt=""
							/>
							<div className="pt-4 h-full md:h-72 flex flex-col justify-center gap-3">
								<h3 className="font-bold text-2xl">Educação Financeira</h3>
								<p className="flex items-center justify-center font-medium text-justify">
									Aprenda a tomar decisões financeiras mais informadas com nossa
									rica coleção de recursos de educação financeira. Explore
									artigos, assista a vídeos e inscreva-se em cursos online. Quer
									saber mais sobre investimentos, orçamento ou como economizar?
									Temos você coberto.
								</p>
							</div>
						</div>
						<div className="w-full mt-6 flex flex-col items-center justify-center md:flex-row md:gap-8">
							<img
								className="h-60 w-60 object-cover md:h-72 md:w-72"
								src="/recompensas.png"
								alt=""
							/>
							<div className="pt-4 h-full md:h-72 flex flex-col justify-center gap-3">
								<h3 className="font-bold text-2xl">Recompensas</h3>
								<p className="flex items-center justify-center font-medium text-justify">
									Ganhe recompensas à medida que você progride em direção às
									suas metas e se envolve na nossa comunidade. Acumule pontos,
									obtenha descontos em parceiros, e aproveite outros benefícios
									exclusivos. Economizar dinheiro nunca foi tão gratificante!
								</p>
							</div>
						</div>
						<div className="w-full mt-6 flex flex-col items-center justify-center md:flex-row md:gap-8">
							<img
								className="h-60 w-60 object-cover md:h-72 md:w-96"
								src="/transacoes-financeiras.avif"
								alt=""
							/>
							<div className="pt-4 h-full md:h-72 flex flex-col justify-center gap-3">
								<h3 className="font-bold text-2xl">
									Gerenciamento de Transações
								</h3>
								<p className="flex items-center justify-center font-medium text-justify">
									Registre suas despesas e receitas de forma fácil e rápida.
									Nosso sistema de rastreamento de transações ajuda você a
									manter um controle preciso de suas finanças. Veja para onde
									seu dinheiro está indo e tome decisões mais inteligentes.
								</p>
							</div>
						</div>
						<div className="w-full mt-6 flex flex-col items-center justify-center md:flex-row md:gap-8">
							<img
								className="h-60 w-60 object-cover md:h-72 md:w-72"
								src="/ferramentas-fina.jpg"
								alt=""
							/>
							<div className="pt-4 h-full md:h-72 flex flex-col justify-center gap-3">
								<h3 className="font-bold text-2xl">Ferramentas de Orçamento</h3>
								<p className="flex items-center justify-center font-medium text-justify">
									Crie orçamentos personalizados, estabeleça limites de gastos e
									receba alertas quando se aproximar desses limites. Mantenha
									suas finanças sob controle e evite surpresas desagradáveis. O
									orçamento nunca foi tão simples.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
