import "./index.scss";

export const Page = () => {
	return <main className="page-cours">
		<section className="intro">
			<h1>Nos cours</h1>
		</section>
		<section className="planning">
			<h2>Les horaires</h2>
			<table></table>
		</section>
		<section>
			<h2>Les tarifs</h2>
			<table></table>
		</section>
	</main>;
};

export default Page;
