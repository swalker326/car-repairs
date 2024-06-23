import { Outlet } from "react-router-dom";
export function Layout() {
	return (
		<div>
			<h1 className="text-5xl">Root</h1>
			<Outlet />
		</div>
	);
}
