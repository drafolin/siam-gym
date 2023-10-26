import clubIcon from "~/assets/images/icon.png";
import "./style.scss";
import { useSize } from "ahooks";
import { Link } from "react-router-dom";

export const Component = () => {
	const size = useSize(document.body);

	return <header>
		<img src={clubIcon} className="icon" alt="L'icône du club" />
		{((size?.width ?? 0) > 768) ?
			<nav>
				<ul>
					<li>
						<Link to="/">Accueil</Link>
					</li>
				</ul>
			</nav> :
			<div className="menu-button">
				<span />
				<span />
				<span />
			</div>}
	</header>;
};

export default Component;
