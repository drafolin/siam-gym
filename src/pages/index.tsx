import './index.scss';
import clubIcon from '~/assets/images/icon.png';
import DropDown from '~/components/DropDown/index';
import { useState } from "react";

export const Component = () => {
	const [prestations, setPrestations] = useState([
		{
			title: "Boxe thaïlandaise",
			details: ["Enfants et adultes", "Tous niveaux"],
			isDeployed: false
		},
		{
			title: "Boxe anglaise",
			details: ["Tous niveaux"],
			isDeployed: false
		},
		{
			title: "Circuit training",
			details: ["Renforcement musculaire", "Cardio"],
			isDeployed: false
		},
		{
			title: "Coaching privé",
			details: ["Programme d’entraînement personnalisé", "Préparation physique"],
			isDeployed: false
		}
	]);

	return (
		<main>
			<section className="intro">
				<img src={clubIcon} alt="Icône de Siam Gym" />
				<p>Bienvenue au</p>
				<h1>SiamGym</h1>
			</section>
			<section className="offers">
				<h2>Nos prestations</h2>
				<ul>
					{
						prestations.map((prestation, index) => {
							return <li onClick={() => {
								const newPrestations = [...prestations];
								newPrestations[index].isDeployed = !prestation.isDeployed;
								setPrestations([...newPrestations]);
							}} key={index}>
								<DropDown title={prestation.title} deploy={prestation.isDeployed}>
									<ul>
										{prestation.details.map((detail, index) => <li key={index}>{detail}</li>)}
									</ul>
								</DropDown>
							</li>;
						})
					}
				</ul>
			</section>
			<section className="gallery">
				<h2>Gallerie</h2>
				<div>A venir!</div>
			</section>
			<section className="map">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.952958896194!2d32.84722288916753!3d39.87529159812883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3459d407069d3%3A0x671be8e4dd107347!2sLorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit!5e0!3m2!1sen!2sch!4v1698263414334!5m2!1sen!2sch"
						loading="lazy"
						className="full-width"/>
			</section>
		</main >
	);
};

export default Component;
