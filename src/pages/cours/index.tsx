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
        <section className="prices">
            <h2>Les tarifs</h2>
            <h3>Nos abonnements</h3>
            <div className="subs">
                <section>
                    <h4>Une discipline</h4>
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
                </section>

                {/*
			<hr/>
			<h4>Full access</h3>
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
            </div>
            <h3>Cours uniques</h3>
            <p>
                Vous pouvez participer à un seul cours pour le prix de 10.- par cours.
            </p>
            <h3>Carte multicours</h3>
            <p>
                Si vous souhaitez participer à plusieurs cours, nous offrons des cartes
                de fidélité, qui offrent une réduction de 10.- sur une tranche de 10 cours.
            </p>
            <p>
                Ainsi, vous payez 90.- pour 10 cours.
            </p>
        </section>
    </main>;
};

export default Page;
