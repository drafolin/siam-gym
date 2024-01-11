import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from "./components/theFooter";
import Header from "./components/theHeader";
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";
import "normalize.css";
import './global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" lazy={()=>import("~/pages/index.tsx")} />
				<Route path="/cours" lazy={()=>import("~/pages/cours/index.tsx")} />
			</Routes>
			<Footer />
		</BrowserRouter>
	</React.StrictMode>,
);
