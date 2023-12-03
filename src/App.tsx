import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { router } from "./routes";

function App() {
	return (
		<>
			<ToastContainer autoClose={4000} />
			<RouterProvider router={router} />
		</>
	);
}

export default App;
