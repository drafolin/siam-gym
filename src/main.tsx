import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from "./components/theFooter";
import Header from "./components/theHeader";
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";
import Index from "~/pages/index";
import Cours from "~/pages/cours";
import "normalize.css";
import './global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" Component={Index} />
				<Route path="/cours" Component={Cours} />
			</Routes>
			<Footer />
		</BrowserRouter>
	</React.StrictMode>,
);
