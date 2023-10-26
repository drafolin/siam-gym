import clubIcon from "~/assets/images/icon.png";
import "./style.scss";
import { useSize } from "ahooks";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

export const Component = () => {
	const size = useSize(document.body);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean | null>(null);
	const [currentMenuState, setCurrentMenuState] = useState<boolean>(false);
	const isBigScreen = () => ((size?.width ?? 0) > 768);

	const toggleMenu = () => {
		console.log("toggleMenu");
		setIsMenuOpen(null);
		requestAnimationFrame(() => {
			setIsMenuOpen(!currentMenuState);
			setCurrentMenuState(!currentMenuState);
		});
	};

	return <>
		<header>
			<img src={clubIcon} className="icon" alt="L'icône du club" />
			{isBigScreen() ?
				<nav>
					<ul>
						<li>
							<Link to="/">Accueil</Link>
						</li>
					</ul>
				</nav> :
				<div className="menu-button" onClick={toggleMenu}>
					<span className={isMenuOpen === null ? "" : isMenuOpen ? "opened" : "closed"} />
					<span className={isMenuOpen === null ? "" : isMenuOpen ? "opened" : "closed"} />
					<span className={isMenuOpen === null ? "" : isMenuOpen ? "opened" : "closed"} />
				</div>}
		</header>
		<CSSTransition
			in={!isBigScreen() && currentMenuState}
			timeout={350}
			classNames="menu"
			unmountOnExit>
			<nav className="menu">
				<ul>
					<li>
						<Link to="/" onClick={toggleMenu}>Accueil</Link>
					</li>
				</ul>
			</nav>
		</CSSTransition>
	</>;
};

export default Component;
