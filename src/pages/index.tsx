import './index.scss';
import clubIcon from '@/assets/images/icon.png';
import DropDown from '@/components/DropDown';

export const Component = () => {
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
					<li>
						<DropDown title={"Boxe thaïlandaise"}>
							<ul>
								<li>Enfants et adultes</li>
								<li>Tous niveaux</li>
							</ul>
						</DropDown>
					</li>
					<li>
						<DropDown title={"Boxe anglaise"}>
							<ul>
								<li>Tous niveaux</li>
							</ul>
						</DropDown>
					</li>
					<li>
						<DropDown title="Circuit training"><ul>
							<li>Renforcement musculaire</li>
							<li>Cardio</li>
						</ul></DropDown>
					</li>
					<li>
						<DropDown title="Coaching privé"><ul>
							<li>Programme d’entraînement personnalisé</li>
							<li>Préparation physique</li>
						</ul></DropDown>
					</li>
				</ul>
			</section>
		</main>
	);
};

export default Component;
