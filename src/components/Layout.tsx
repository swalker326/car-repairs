import { Outlet } from "react-router-dom";
export function Layout() {
	return (
		<div>
			<h1>Root</h1>
			<Outlet />
		</div>
	);
}
