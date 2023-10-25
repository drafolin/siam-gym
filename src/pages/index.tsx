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

	console.log(prestations);

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
							}}>
								<DropDown title={prestation.title} deploy={prestation.isDeployed}>
									<ul>
										{prestation.details.map((detail) => <li>{detail}</li>)}
									</ul>
								</DropDown>
							</li>;
						})
					}
				</ul>
			</section>
		</main>
	);
};

export default Component;
