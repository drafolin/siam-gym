import { FunctionComponent, JSX, useState } from "react";
import { CSSTransition } from "react-transition-group";
import ChevronRight from "@/assets/images/chevron.right.svg";
import "./style.scss";


const MyComponent: FunctionComponent<{ title: JSX.Element, children: JSX.Element; }> = ({ title, children }) => {
	const [isDeployed, setIsDeployed] = useState(false);

	return (
		<div className="Cstm__DD">
			<button onClick={() => setIsDeployed(!isDeployed)} className="header">
				<div className="title">{title}</div>
				<img className={`arrow ${isDeployed ? 'rotated' : ''}`} src={ChevronRight} />
			</button>
			<CSSTransition
				in={isDeployed}
				timeout={350}
				classNames="display"
				unmountOnExit>
				<div className="content">{children}</div>
			</CSSTransition>
		</div>
	);
};

export default MyComponent;
