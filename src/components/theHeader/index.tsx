import clubIcon from "~/assets/images/icon.png";
import "./style.scss";

export const Component = () => {
	return <header>
		<img src={clubIcon} className="icon" alt="L'icône du club" />
		<div className="menu-button">
			<span />
			<span />
			<span />
		</div>
	</header>;
};

export default Component;
