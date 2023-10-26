import clubIcon from "~/assets/images/icon.png";
import "./style.scss";
import { useSize } from "ahooks";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

export const Component = () => {
	const size = useSize(document.body);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const isBigScreen = () => ((size?.width ?? 0) > 768);

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
				<div className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
					<span />
					<span />
					<span />
				</div>}
		</header>
		<CSSTransition
			in={!isBigScreen() && isMenuOpen}
			timeout={350}
			classNames="menu"
			unmountOnExit>
			<nav className="menu">
				<ul>
					<li>
						<Link to="/">Accueil</Link>
					</li>
				</ul>
			</nav>
		</CSSTransition>
	</>;
};

export default Component;
