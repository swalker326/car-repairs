import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import RootRoute from "./routes/root";
import router from "./router";

//@ts-expect-error - idk rsbuild is not recognizing the import
const rootEl = document.getElementById("root");

if (rootEl) {
	const root = ReactDOM.createRoot(rootEl);
	root.render(
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>,
	);
}
