import { ReactNode } from "react";

type CardContainerProps = {
	id: string;
	children: ReactNode;
};

export const CardContainer = ({ children, id }: CardContainerProps) => (
	<div
		id={id}
		className="flex w-full p-8 flex-col rounded bg-white shadow-2xl shadow-gray-500"
	>
		{children}
	</div>
);
