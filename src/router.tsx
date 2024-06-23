import { createBrowserRouter } from "react-router-dom";
import RootRoute from "./routes/root";
import IndexRoute from "./routes";
const router = createBrowserRouter([
	{
		path: "/",
		element: <RootRoute />,
		children: [{ index: true, element: <IndexRoute /> }],
	},
]);

export default router;
