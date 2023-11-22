import { Button } from '../components/Button'
import { Navbar } from '../components/Navbar'

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-full relative">
        <img className="w-full object-cover z-0" src="/banner_.jpg" alt="" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <div className='w-full flex flex-col gap-8 items-center justify-center'>
            <h3 className="text-xl sm:text-3xl lg:text-6xl font-bold text-white">
              Seja Mestre das Suas Finanças
            </h3>
            <p className="text-white text-sm md:text-base lg:text-lg font-bold text-center">
              Bem-vindo à nossa plataforma de aconselhamento financeiro, onde
              sua jornada para o sucesso financeiro começa.
            </p>
            <div className="max-w-[10rem] max-h-12 md:max-h-14 md:max-w-[16rem] w-full h-14">
              <Button title="Iniciar jornada" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1180px] p-5 flex flex-col w-full m-auto items-start justify-between">
        <div className="w-full">
          <h1 className="text-primary text-3xl font-bold mb-4">
            Recursos e Benefícios
          </h1>
          <div className="flex flex-col gap-8">
            <div className="w-full mt-6 flex flex-col items-center justify-center md:flex-row md:gap-8">
              <img
                className="h-60 w-60 md:h-72 md:w-96"
                src="/rastreamento.png"
                alt=""
              />
              <div className="pt-4 h-full md:h-72 flex flex-col justify-center gap-3">
                <h3 className="font-bold text-2xl">
                  Rastreamento de Meta
                </h3>
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
                className="h-60 w-60 md:h-72 md:w-96"
                src="/login.png"
                alt=""
              />
              <div className="pt-4 h-full md:h-72 flex flex-col justify-center gap-3">
                <h3 className="font-bold text-2xl">
                  Educação Financeira
                </h3>
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
                className="h-60 w-60 md:h-72 md:w-96"
                src="/login.png"
                alt=""
              />
              <div className="pt-4 h-full md:h-72 flex flex-col justify-center gap-3">
                <h3 className="font-bold text-2xl">Recompensas</h3>
                <p className="text-white flex items-center justify-center font-medium text-justify">
                  Ganhe recompensas à medida que você progride em direção às
                  suas metas e se envolve na nossa comunidade. Acumule pontos,
                  obtenha descontos em parceiros, e aproveite outros benefícios
                  exclusivos. Economizar dinheiro nunca foi tão gratificante!
                </p>
              </div>
            </div>
            <div className="w-full mt-6 flex flex-col items-center justify-center md:flex-row md:gap-8">
              <img
                className="h-60 w-60 md:h-72 md:w-96"
                src="/login.png"
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
                className="h-60 w-60 md:h-72 md:w-96"
                src="/login.png"
                alt=""
              />
              <div className="pt-4 h-full md:h-72 flex flex-col justify-center gap-3">
                <h3 className="font-bold text-2xl">
                  Ferramentas de Orçamento
                </h3>
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
  )
}
