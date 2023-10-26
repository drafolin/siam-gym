import clubIcon from "~/assets/images/icon.png";
import "./style.scss";
import { useSize } from "ahooks";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

enum MenuState {
	OPENING,
	OPENED,
	CLOSING,
	CLOSED
}

export const Component = () => {
	const size = useSize(document.body);
	const [menuState, setMenuState] = useState<MenuState>(MenuState.CLOSED);
	const animation = useRef<number | null>(null);
	const isBigScreen = () => ((size?.width ?? 0) > 768);

	const toggleMenu = () => {
		if (menuState === MenuState.OPENED || menuState === MenuState.OPENING) {
			if (animation.current) {
				clearTimeout(animation.current);
			}

			setMenuState(MenuState.CLOSING);
			animation.current = setTimeout(() => {
				setMenuState(MenuState.CLOSED);
			}, 300);
		} else if (menuState === MenuState.CLOSED || menuState === MenuState.CLOSING) {
			if (animation.current) {
				clearTimeout(animation.current);
			}

			setMenuState(MenuState.OPENING);
			animation.current = setTimeout(() => {
				setMenuState(MenuState.OPENED);
			}, 300);
		}
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
					<span className={
						menuState === MenuState.CLOSED ? "" :
							menuState === MenuState.CLOSING ? "closing" :
								menuState === MenuState.OPENING ? "opening" :
									menuState === MenuState.OPENED ? "open" : ""
					} />
					<span className={
						menuState === MenuState.CLOSED ? "" :
							menuState === MenuState.CLOSING ? "closing" :
								menuState === MenuState.OPENING ? "opening" :
									menuState === MenuState.OPENED ? "open" : ""
					} />
					<span className={
						menuState === MenuState.CLOSED ? "" :
							menuState === MenuState.CLOSING ? "closing" :
								menuState === MenuState.OPENING ? "opening" :
									menuState === MenuState.OPENED ? "open" : ""
					} />
				</div>}
		</header>
		<CSSTransition
			in={!isBigScreen() && (menuState === MenuState.OPENED || menuState === MenuState.OPENING)}
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
