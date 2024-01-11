import "./style.scss";
import Comte from "~/assets/images/Comte.svg?react";
import phoneIcon from "~/assets/images/phone.png";
import emailIcon from "~/assets/images/email.png";
import instagramIcon from "~/assets/images/instagram.png";
import { ReactElement } from "react";

export const Footer = () => {
	const sponsors: { image: ReactElement | string; website: string; name: string; }[] = [{
		image: <Comte />,
		name: "Comte - Bâtiments et génie civil",
		website: "https://www.gcomte.ch/fr/index.html"
	}];

	const currentYear = new Date().getFullYear();

	return <footer>
		<section className="contact">
			<ul>
				<li>
					<a href="https://instagram.com/siam_gym_ju" target={"_blank"}>
						<img src={instagramIcon} alt="Retrouvez-nous sur instagram!" />
					</a>
				</li>
				<li>
					<a href="mailto:siam.gym.ju@gmail.com" target={"_blank"}>
						<img src={emailIcon} alt={"Envoyez-nous un mail!"} />
					</a>
				</li>
				<li>
					<a href="tel:+41789564648">
						<img src={phoneIcon} alt={"Téléphonez-nous!"} />
					</a>
				</li>
			</ul>
		</section>
		<section className="sponsors">
			<p>Nos collaborateurs</p>
			<ul>{
				sponsors.map((v, i) =>
					<li key={i}>
						<a href={v.website}>
							{
								typeof v.image === "string" ?
									<img src={v.image} alt={v.name} /> :
									v.image
							}
						</a>
					</li>)
			}</ul>
		</section>
		<section className="copyright">
			<p>&copy; 2023{currentYear !== 2023 ? `-${currentYear}` : ""} <a href="https://drafolin.ch">Odin Beuchat</a></p>
		</section>
	</footer>;
};

export default Footer;
