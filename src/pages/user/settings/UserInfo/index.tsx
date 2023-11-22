import { useState } from 'react'
import { MyAccess } from './MyAccess'
import { PersonalInfo } from './PersonalInfo'
import { ModalMyAccess } from '../../../../components/user/ModalMyAccess'
import { Address } from './Address'
import { UserNavbar } from '../../../../components/user/UserNavbar'

export const UserInfo = () => {
  const [openPasswordModal, setOpenPasswordModal] = useState(false)

  const handleOpenPasswordModal = () => {
    setOpenPasswordModal(!openPasswordModal)
  }
  return (
    <>
      <UserNavbar />
      {openPasswordModal && (
        <ModalMyAccess setShowModal={setOpenPasswordModal} />
      )}
      <div className="max-w-[1180px] p-5 flex w-full m-auto items-start justify-between">
        <div className="sticky bg-[#202024] hidden w-[325px] top-32 mr-16 rounded py-2 md:block">
          <a
            href=""
            className="text-white w-full px-8 rounded bg-[#202024] py-4 border-solid block cursor-pointer hover:bg-black hover:bg-opacity-20"
          >
            Informação Pessoal
          </a>
          <a
            href=""
            className="text-white px-8 rounded bg-[#202024] py-4 border-l-2 border-primary border-solid block cursor-pointer hover:bg-black hover:bg-opacity-20"
          >
            Meu acesso
          </a>
          <a
            href=""
            className="text-white rounded bg-[#202024] px-8 py-4 border-solid block cursor-pointer hover:bg-black hover:bg-opacity-20"
          >
            Endereço
          </a>
        </div>
        <div className="flex flex-col gap-8 flex-1 min-w-0 mt-9">
          <PersonalInfo />
          <MyAccess handleOpenPasswordModal={handleOpenPasswordModal} />
          <Address />
        </div>
      </div>
    </>
  )
}
