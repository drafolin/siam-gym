import './index.scss';
import clubIcon from '@/assets/images/icon.png';

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
					<li>Boxe thaïlandaise (tous niveaux)</li>
					<li>Boxe thaïlandaise (enfants)</li>
					<li>Boxe anglaise (tous niveaux)</li>
					<li>Circuit training <ul>
						<li>Renforcement musculaire</li>
						<li>Cardio</li>
					</ul></li>
					<li>Coaching privé</li>
					<li>Programme d’entraînement personnalisé</li>
					<li>Préparation physique</li>
				</ul>
			</section>
		</main>
	);
};

export default Component;
