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
		</main>
	);
};

export default Component;
