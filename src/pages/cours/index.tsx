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
			<h3>Une discipline</h3>
			<table>
				<thead>
					<tr>
						<th></th>
						<th>1 mois</th>
						<th>dès 3 mois</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Enfant</td>
						<td>20.-</td>
						<td>20.-/mois</td>
					</tr>
					<tr>
						<td>Etudiant</td>
						<td>55.-</td>
						<td>50.-/mois</td>
					</tr>
					<tr>
						<td>Adulte</td>
						<td>65.-</td>
						<td>60.-/mois</td>
					</tr>
				</tbody>
			</table>

			{/*
			<hr/>
			<h3>Full access</h3>
			<table>
				<thead>
					<tr>
						<th></th>
						<th>1 mois</th>
						<th>dès 3 mois</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Enfant</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>Etudiant</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>Adulte</td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>

			*/}
		</section>
	</main>;
};

export default Page;
