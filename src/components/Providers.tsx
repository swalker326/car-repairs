import { ClerkProvider } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProvider publishableKey="pk_test_Y2FzdWFsLXdhc3AtOTIuY2xlcmsuYWNjb3VudHMuZGV2JA">
			{children}
		</ClerkProvider>
	);
}
