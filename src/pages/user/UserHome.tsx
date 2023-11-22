import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar'

export const UserHome = () => {
  return (
    <>
      <div className="flex min-h-screen bg-[#121214]">
        <Sidebar />
        <div className="flex flex-1">
          <div className="w-full flex flex-col p-8 gap-4">
            <h1 className="text-white">Dashboard</h1>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  )
}
