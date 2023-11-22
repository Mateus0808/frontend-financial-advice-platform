import { IoIosArrowForward } from 'react-icons/io'
import { IconContext } from 'react-icons'
import { useState } from 'react'
import { UserNavbar } from '../../components/user/UserNavbar'

type LiProps = {
  title: string
  handleOption: (level: string, state: boolean) => void
  level: string
  stateLevel: string
}

const LiLevel = ({ title, handleOption, level, stateLevel }: LiProps) => (
  <li
    className={`flex flex-col rounded md:w-3/5 md:flex-row ${stateLevel === level ? 'bg-white bg-opacity-5': '' }`}
    onClick={() => handleOption(level, true)}
  >
    <div className="flex w-full items-center group p-6 rounded hover:bg-white hover:bg-opacity-5 gap-4">
      <IconContext.Provider
        value={{
          className: 'fill-primary h-8 w-8',
        }}
      >
        <IoIosArrowForward />
      </IconContext.Provider>
      <p className="font-semibold whitespace-nowrap">{title}</p>
    </div>
  </li>
)

export const FinancialEducation = () => {
  const [beginnerLevel, setBeginnerLevel] = useState({
    level: '',
    state: false,
  })

  const handleBeginnerLevel = (level: string, state: boolean) => {
    setBeginnerLevel({ level: state ? level : '', state })
  }

  return (
    <>
      <UserNavbar />
      <div className="max-w-[1180px] p-5 flex flex-col w-full m-auto items-start justify-between">
        <h1 className="font-bold text-2xl">Educação financeira</h1>
        <div className="flex flex-col md:flex-row mt-6 w-full">
          <ul className="flex relative flex-col w-full gap-4">
            <div>
              <LiLevel
                title="Nível iniciante"
                handleOption={() =>
                  handleBeginnerLevel('beginner', !beginnerLevel.state)
                }
                level="beginner"
                stateLevel={beginnerLevel.level}
              />
              {beginnerLevel.level == 'beginner' && beginnerLevel.state && (
                <div className="md:w-2/5 md:pl-6 md:absolute md:right-20 md:top-0">
                  <ul className="flex flex-col w-full pl-[4.5rem] ">
                    <li onClick={() => {}} className="h-14 pl-4 rounded w-full flex gap-2 items-center hover:bg-white hover:bg-opacity-5">
                      <IconContext.Provider
                        value={{
                          className: 'fill-primary h-6 w-6',
                        }}
                      >
                        <IoIosArrowForward />
                      </IconContext.Provider>
                      <p className="font-semibold whitespace-nowrap">
                        Introdução às Finanças Pessoais
                      </p>
                    </li>
                    <ul className="flex flex-col w-full pl-[3rem] ">
                      <li className="h-12 w-full flex flex-col justify-center items-center">
                        <a
                          href="/home/modulo-financas"
                          className="w-full whitespace-nowrap h-full px-4 flex rounded gap-2 items-center hover:bg-white hover:bg-opacity-5"
                        >
                          Renda
                        </a>
                      </li>
                      <li className="h-12 w-full flex flex-col justify-center items-center">
                        <a
                          href="#"
                          className="w-full whitespace-nowrap h-full px-4 flex rounded gap-2 items-center hover:bg-white hover:bg-opacity-5"
                        >
                          Despesas
                        </a>
                      </li>
                      <li className="h-12 w-full flex flex-col justify-center items-center">
                        <a
                          href="#"
                          className="w-full whitespace-nowrap h-full px-4 flex rounded gap-2 items-center hover:bg-white hover:bg-opacity-5"
                        >
                          Orçamento
                        </a>
                      </li>
                    </ul>
                    <li className="h-14 pl-4 rounded w-full flex justify-center items-center hover:bg-white hover:bg-opacity-5">
                      <a
                        href="#"
                        className="w-full h-full flex gap-2 items-center"
                      >
                        <IconContext.Provider
                          value={{
                            className: 'fill-primary h-6 w-6',
                          }}
                        >
                          <IoIosArrowForward />
                        </IconContext.Provider>
                        <p className="font-semibold whitespace-nowrap">
                          Importância do Orçamento
                        </p>
                      </a>
                    </li>
                    <li className="h-14 pl-4 rounded w-full flex justify-center items-center hover:bg-white hover:bg-opacity-5">
                      <a
                        href="#"
                        className="w-full h-full flex gap-2 items-center"
                      >
                        <IconContext.Provider
                          value={{
                            className: 'fill-primary h-6 w-6',
                          }}
                        >
                          <IoIosArrowForward />
                        </IconContext.Provider>
                        <p className="font-semibold whitespace-nowrap">
                          Economia de Dinheiro
                        </p>
                      </a>
                    </li>
                    <li className="h-14 pl-4 rounded w-full flex justify-center items-center hover:bg-white hover:bg-opacity-5">
                      <a
                        href="#"
                        className="w-full h-full flex gap-2 items-center"
                      >
                        <IconContext.Provider
                          value={{
                            className: 'fill-primary h-6 w-6',
                          }}
                        >
                          <IoIosArrowForward />
                        </IconContext.Provider>
                        <p className="font-semibold whitespace-nowrap">
                          Redução de Dívidas
                        </p>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div>
              <LiLevel
                title="Nível intermediário"
                handleOption={() =>
                  handleBeginnerLevel('intermediary', !beginnerLevel.state)
                }
                level="intermediary"
                stateLevel={beginnerLevel.level}
              />
              {beginnerLevel.level == 'intermediary' && beginnerLevel.state && (
                <div className="md:w-2/5 md:pl-6 md:absolute md:right-20 md:top-0">
                  <ul className="flex flex-col w-full pl-[3.5rem] ">
                    <li className="h-14 px-4 rounded w-full flex justify-center items-center hover:bg-white hover:bg-opacity-5">
                      <a href="#" className="w-full h-full flex items-center">
                        Investimentos Básicos
                      </a>
                    </li>
                    <li className="h-14 px-4 rounded w-full flex justify-center items-center hover:bg-white hover:bg-opacity-5">
                      <a href="#" className="w-full h-full flex items-center">
                        Conceitos de Juros
                      </a>
                    </li>
                    <li className="h-14 px-4 rounded w-full flex justify-center items-center hover:bg-white hover:bg-opacity-5">
                      <a href="#" className="w-full h-full flex items-center">
                        Diversificação de Investimentos
                      </a>
                    </li>
                    <li className="h-14 pl-4 rounded w-full flex justify-center items-center hover:bg-white hover:bg-opacity-5">
                      <a href="#" className="w-full h-full flex items-center">
                        Planejamento de Aposentadoria
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div>
              <LiLevel
                title="Nível avançado"
                handleOption={() =>
                  handleBeginnerLevel('advanced', !beginnerLevel.state)
                }
                level="advanced"
                stateLevel={beginnerLevel.level}
              />
              <div>
                {beginnerLevel.level == 'advanced' && beginnerLevel.state && (
                  <div className="md:w-2/5 md:pl-6 md:absolute md:right-20 md:top-0">
                    <ul className="flex flex-col w-full pl-[4.5rem] ">
                      <li className="h-14 pl-4 rounded w-full flex justify-center items-center hover:bg-white hover:bg-opacity-5">
                        <a href="#" className="w-full h-full flex items-center">
                          Investimentos Avançados
                        </a>
                      </li>
                      <li className="h-14 pl-4 rounded w-full flex justify-center items-center hover:bg-white hover:bg-opacity-5">
                        <a href="#" className="w-full h-full flex items-center">
                          Gestão de Riscos
                        </a>
                      </li>
                      <li className="h-14 pl-4 rounded w-full flex justify-center items-center hover:bg-white hover:bg-opacity-5">
                        <a href="#" className="w-full h-full flex items-center">
                          Planejamento Financeiro de Longo Prazo
                        </a>
                      </li>
                      <li className="h-14 pl-4 rounded w-full flex justify-center items-center hover:bg-white hover:bg-opacity-5">
                        <a href="#" className="w-full h-full flex items-center">
                          Impostos e Finanças
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div>
              <LiLevel
                title="Tópicos Específicos"
                handleOption={() =>
                  handleBeginnerLevel('specific_topics', !beginnerLevel.state)
                }
                level="specific_topics"
                stateLevel={beginnerLevel.level}
              />
              <div className="md:w-2/5 md:pl-6 md:absolute md:right-20 md:top-0">
                {beginnerLevel.level == 'specific_topics' &&
                  beginnerLevel.state && (
                    <div>
                      <ul className="flex flex-col w-full pl-[4.5rem] ">
                        <li className="h-14 pl-4 rounded w-full flex justify-center items-center hover:bg-white hover:bg-opacity-5">
                          <a
                            href="#"
                            className="w-full h-full flex items-center"
                          >
                            Finanças Pessoais e Família
                          </a>
                        </li>
                        <li className="h-14 pl-4 rounded w-full flex justify-center items-center hover:bg-white hover:bg-opacity-5">
                          <a
                            href="#"
                            className="w-full h-full flex items-center"
                          >
                            Estratégias para Aumentar a Renda
                          </a>
                        </li>
                        <li className="h-14 pl-4 rounded w-full flex justify-center items-center hover:bg-white hover:bg-opacity-5">
                          <a
                            href="#"
                            className="w-full h-full flex items-center"
                          >
                            Investimentos Éticos e Sustentáveis
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}
