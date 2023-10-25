import { FunctionComponent, useState } from "react";
import { CSSTransition } from "react-transition-group";
import ChevronRight from "~/assets/images/chevron.right.svg";
import "./style.scss";


const MyComponent: FunctionComponent<{ title: React.ReactNode, children: React.ReactNode, deploy: boolean | null; }> = ({ title, children, deploy }) => {
	const [isDeployed, setIsDeployed] = useState(false);

	const shouldBeDeployed = () => deploy ?? isDeployed;

	return (
		<div className="Cstm__DD">
			<button onClick={() => deploy ?? setIsDeployed(!isDeployed)} className="header">
				<div className="title">{title}</div>
				<img className={`arrow ${shouldBeDeployed() ? 'rotated' : ''}`} src={ChevronRight} />
			</button>
			<CSSTransition
				in={shouldBeDeployed()}
				timeout={350}
				classNames="display"
				unmountOnExit>
				<div className="content">{children}</div>
			</CSSTransition>
		</div>
	);
};

export default MyComponent;
