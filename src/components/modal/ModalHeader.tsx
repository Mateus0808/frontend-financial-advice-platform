import { AiOutlineClose } from 'react-icons/ai'
import { IconContext } from 'react-icons'

export type ModalHeaderProps = {
	title: string
  setShowModal: (open: boolean) => void
}

export const ModalHeader = ({ title, setShowModal }: ModalHeaderProps) => {
	return (
		<div className="flex items-start justify-between">
			<h3 className="text-2xl uppercase w-full flex justify-center items-center  text-gray-600 font-semibold">
				{title}
			</h3>
			<button
				className="group p-1 transition-colors ease-in-out hover:bg-gray-100 rounded ml-auto absolute right-5 top-5 border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
				onClick={() => setShowModal(false)}
			>
				<IconContext.Provider
					value={{
						className: "fill-gray-600 group-hover:fill-gray-700 h-8 w-8",
					}}
				>
					<AiOutlineClose />
				</IconContext.Provider>
			</button>
		</div>
	);
};
