import { ReactNode } from "react";

type DefaultContainerProps = {
	children: ReactNode;
};

export const DefaultContainer = ({ children }: DefaultContainerProps) => (
	<div className="w-full flex flex-col p-8 gap-4">{children}</div>
);
