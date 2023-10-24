import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from "./components/theFooter";
import Header from "./components/theHeader";
import './global.scss';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import "normalize.css";

const router = createBrowserRouter([
	{
		path: "/",
		lazy: () => import('./pages/index.tsx'),
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Header />
		<RouterProvider router={router} />
		<Footer />
	</React.StrictMode>,
);
