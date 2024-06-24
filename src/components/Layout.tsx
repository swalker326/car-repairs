import { Link, NavLink, Outlet } from "react-router-dom";
import { Button } from "./shadcn-components/ui/button";
import {
	SignedOut,
	SignInButton,
	SignedIn,
	UserButton,
	ClerkProvider,
} from "@clerk/clerk-react";
import { Providers } from "./Providers";
export function Layout() {
	return (
		<div className="h-[100vh] overflow-x-hidden flex flex-col gap-4 relative">
			<ClerkProvider publishableKey="pk_test_Y2FzdWFsLXdhc3AtOTIuY2xlcmsuYWNjb3VudHMuZGV2JA">
				<header
					id="Header"
					className="flex justify-between w-full bg-gray-100 px-4 p-4"
				>
					<Link to="/">
						<h1 className="text-5xl underline">Car Repairs</h1>
					</Link>
					<ul className="flex gap-2 justify-end items-center">
						<NavLink to="repair/create">Add Repair</NavLink>
						<SignedOut>
							<Button>
								<SignInButton />
							</Button>
						</SignedOut>
						<SignedIn>
							<Button>
								<UserButton />
							</Button>
						</SignedIn>
					</ul>
				</header>
				<main className="px-4">
					<Outlet />
				</main>
			</ClerkProvider>
		</div>
	);
}
