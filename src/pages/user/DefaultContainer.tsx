import { ReactNode } from "react";

type DefaultContainerProps = {
	children: ReactNode;
};

export const DefaultContainer = ({ children }: DefaultContainerProps) => (
	<div className="max-w-[1180px] w-full flex flex-col m-auto gap-12">
		{children}
	</div>
);
