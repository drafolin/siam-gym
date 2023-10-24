import "./style.scss";
import Comte from "@/assets/images/Comte.svg?react"
import {ReactElement} from "react";

export const Footer = () => {
	const sponsors: { image: ReactElement | string; website: string; name: string }[] = [{
		image: <Comte/>,
		name: "Comte - Bâtiments et génie civil",
		website: "https://www.gcomte.ch/fr/index.html"
	}];

	const currentYear = new Date().getFullYear();

	return <footer>
		<section className="sponsors">
			<p>Nos collaborateurs</p>
			<ul>{
				sponsors.map(v =>
					<li>
						<a href={v.website}>
							{
								typeof v.image === "string" ?
									<img src={v.image} alt={v.name} />:
									v.image
							}
						</a>
					</li>)
			}</ul>
		</section>
		<section className="copyright">
			<p>&copy; 2023{currentYear !== 2023 ? "-{currentYear}" : ""} <a href="https://drafolin.ch">Odin Beuchat</a></p>
		</section>
	</footer>;
};

export default Footer;
