import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from "./components/theFooter";
import './global.scss';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		lazy: () => import('./pages/index.tsx'),
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
		<footer>
			<Footer />
		</footer>
	</React.StrictMode>,
);
