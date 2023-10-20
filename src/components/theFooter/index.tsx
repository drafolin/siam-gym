import "./style.scss";
import Comte from "@/assets/Comte.svg";

export const Footer = () => {
	const sponsors = [{
		image: Comte,
		name: "Comte - Bâtiments et génie civil",
		website: "https://www.gcomte.ch/fr/index.html"
	}];

	return <>
		<section>
			<p>Nos collaborateurs</p>
			<ul>{
				sponsors.map(v =>
					<li>
						<a href={v.website}>
							<img src={v.image} alt={v.name} />
						</a>
					</li>)
			}</ul>
		</section>
		<section>
			<p>&copy; 2023 <a href="https://drafolin.ch">Odin Beuchat</a></p>
		</section>
	</>;
};

export default Footer;
