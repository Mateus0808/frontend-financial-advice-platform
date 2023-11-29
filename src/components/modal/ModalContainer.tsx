import { ReactNode } from "react";

type ModalContainerProps = {
	children: ReactNode
}

export const ModalContainer = ({ children }: ModalContainerProps) => (
	<div className="bg-black bg-opacity-40 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
		<div className="relative w-full my-6 mx-auto max-w-lg max-h-[90vh]">
			<div className="p-8 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
				{children}
			</div>
		</div>
	</div>
);
