import { FunctionComponent, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.scss";


const Component: FunctionComponent<{ title: React.ReactNode, children: React.ReactNode, deploy?: boolean; }> = ({ title, children, deploy }) => {
	const [isDeployed, setIsDeployed] = useState(false);

	const shouldBeDeployed = () => deploy ?? isDeployed;

	return (
		<div className="Cstm__DD">
			<button onClick={() => deploy ?? setIsDeployed(!isDeployed)} className="header">
				<div className="title">{title}</div>
				<span className={`symbol arrow ${shouldBeDeployed() ? 'rotated' : ''}`}>&#1051643;</span>
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

export default Component;
