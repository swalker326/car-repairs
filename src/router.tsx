import { createBrowserRouter } from "react-router-dom";
import RootRoute from "./routes/root";
import IndexRoute from "~/routes";
import { AuthLoginRoute } from "./routes/auth/login";
import { AuthCreateAccountRoute } from "./routes/auth/create-account";
import { RepairCreateRoute } from "./routes/repair/create";
const router = createBrowserRouter([
	{
		path: "/",
		element: <RootRoute />,
		children: [
			{ index: true, element: <IndexRoute /> },
			{ path: "auth/login", element: <AuthLoginRoute /> },
			{ path: "auth/create", element: <AuthCreateAccountRoute /> },
			{
				path: "repair",
				children: [
					{
						index: true,
						element: (
							<div>Create a new repair OR search for vehicle repairs</div>
						),
					},
					{ path: "create", element: <RepairCreateRoute /> },
				],
			},
		],
	},
]);

export default router;
