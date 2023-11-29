import { useState } from "react";
import { IconOptions } from "../icons/IconOptions";

export const ActionMenu = () => {
	const [options, setOptions] = useState(false);

	return (
		<div>
			<button
				onClick={() => setOptions(!options)}
				className="px-8 py-4 border-0"
			>
				<IconOptions />
				{options && (
					<div className="flex absolute top-0 right-10 flex-col gap-2 p-3 py-4 border border-gray-300 rounded">
						<button>Excluir</button>
						<button>Editar</button>
					</div>
				)}
			</button>
		</div>
	);
};
