import { Link, NavLink, Outlet } from "react-router-dom";
import { Button } from "./shadcn-components/ui/button";
export function Layout() {
	return (
		<div className="h-[100vh] overflow-x-hidden flex flex-col gap-4 px-4 p-2">
			<div id="Header" className="flex justify-between w-full">
				<Link to="/">
					<h1 className="text-5xl underline">Car Repairs</h1>
				</Link>
				<ul className="flex gap-2 justify-end items-center">
					<NavLink to="repair/create">Add Repair</NavLink>
					<Button asChild>
						<NavLink to="/auth/login">Login</NavLink>
					</Button>
				</ul>
			</div>
			<div className="border">
				<Outlet />
			</div>
		</div>
	);
}
