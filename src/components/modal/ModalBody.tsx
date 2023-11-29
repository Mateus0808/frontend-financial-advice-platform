import { ReactNode } from "react";

type ModalBodyProps = {
	children: ReactNode;
};

export const ModalBody = ({ children }: ModalBodyProps) => (
	<div className="p-4">{children}</div>
);
