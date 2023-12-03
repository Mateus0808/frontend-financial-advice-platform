
export const FinancialModulo = () => {
	return (
		<div className="max-w-[1180px] p-5 flex flex-col w-full m-auto items-start justify-between">
			<h1 className="font-bold text-gray-500 text-3xl">Renda</h1>
			<div className="flex mt-4 flex-col gap-4">
				<p className="leading-6 text-justify">
					Sua renda é o dinheiro que você ganha regularmente. Isso pode incluir
					salário, renda de aluguel, juros de investimentos e outros. É
					importante entender que a renda é a base de todas as suas finanças.
				</p>
				<p className="leading-6 text-justify">
					<span className="font-bold">Exemplo de renda:</span> Seu salário
					mensal é de R$ 3.000. Além disso, você recebe R$ 200 em juros de uma
					conta de poupança e R$ 100 de aluguel de uma propriedade que você
					possui.
				</p>
				<div>
					<h3 className="font-bold text-xl text-gray-500">
						Cálculo da Renda Pessoal
					</h3>
					<p className="leading-6 mt-4 text-justify">
						Renda Pessoal = (Renda Nacional - contribuições previdenciárias -
						impostos sobre o lucro das empresas - lucros não distribuídos das
						empresas + pagamentos de transferências pelo governo ou pelo setor
						privado)
					</p>
					<p className="leading-6 text-justify">
						Portanto, a renda pessoal corresponde à renda total de todos os
						indivíduos na forma de salários, transferências (subsídios,
						aposentadorias, pensões e outros benefícios previdenciários)
						honorários, alugueis, juros ou lucros, antes do pagamento do imposto
						de renda e demais tributos pessoais
					</p>
				</div>
				<div>
					<h3 className="font-bold text-xl text-gray-500">
						Renda Pessoal Disponível
					</h3>
					<p></p>
				</div>
			</div>
		</div>
	);
};
