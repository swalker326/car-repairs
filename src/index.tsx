import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./global.css";
import { ClerkProvider } from "@clerk/clerk-react";

//@ts-expect-error - idk rsbuild is not recognizing the import
const rootEl = document.getElementById("root");

const root = ReactDOM.createRoot(rootEl);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
