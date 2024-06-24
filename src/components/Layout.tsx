import { NavLink, Outlet } from "react-router-dom";
export function Layout() {
	return (
		<div className="h-[100vh] overflow-x-hidden flex flex-col gap-4 px-4 p-2">
			<div id="Header" className="flex justify-between w-full">
				<h1 className="text-5xl">Car Repairs</h1>
				<ul className="flex gap-2 justify-end items-center">
					<NavLink to="repair/create">Add Repair</NavLink>
					<NavLink to="/login">Login</NavLink>
				</ul>
			</div>
			<div className="border">
				<Outlet />
			</div>
		</div>
	);
}
