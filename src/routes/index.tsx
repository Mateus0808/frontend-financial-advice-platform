import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/about";

export function Router() {
	const location = useLocation();

	return (
		<Routes location={location} key={location.pathname}>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
		</Routes>
	);
}
