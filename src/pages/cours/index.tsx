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
          <div className="w1">
            <div className="price-table">
              <h4>Muay thaï</h4>
              <p>4 cours par semaine</p>
              <table>
                <thead>
                <tr>
                  <th></th>
                  <th>1 mois</th>
                  <th>3 mois</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Enfant</td>
                  <td>20.-</td>
                  <td>60.-</td>
                </tr>
                <tr>
                  <td>Etudiant</td>
                  <td>55.-</td>
                  <td>150.-</td>
                </tr>
                <tr>
                  <td>Adulte</td>
                  <td>65.-</td>
                  <td>180.-</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="w1">
            <div className="price-table">
              <h4>Boxe anglaise ou circuit training</h4>
              <p>3 cours par semaine</p>
              <table>
                <thead>
                <tr>
                  <th></th>
                  <th>1 mois</th>
                  <th>3 mois</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Etudiant</td>
                  <td>45.-</td>
                  <td>120.-</td>
                </tr>
                <tr>
                  <td>Adulte</td>
                  <td>55.-</td>
                  <td>150.-</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="w1">
            <div className="price-table">
              <h4>Offres multiples</h4>
              <table>
                <thead>
                <tr>
                  <th></th>
                  <th>Dual</th>
                  <th>Dual Thaï</th>
                  <th>All-inclusive</th>
                </tr>
                </thead>
                <tfoot>
                <tr>
                  <td colSpan={4}>Prix mensuels</td>
                </tr>
                </tfoot>
                <tbody>
                <tr>
                  <td>Etudiant</td>
                  <td>70.-</td>
                  <td>80.-</td>
                  <td>90.-</td>
                </tr>
                <tr>
                  <td>Adulte</td>
                  <td>80.-</td>
                  <td>90.-</td>
                  <td>100.-</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p>L'offre dual inclus deux disciplines, sauf Muay Thaï.</p>
            <p>L'offre dual thaï inclus le Muay Thaï et une autre discipline.</p>
            <p>L'offre all-inclusive inclus toutes les disciplines du club.</p>
          </div>
        </section>


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
    <section>
      <h2>Cours sur demande</h2>
      <ul>
        <li>Coaching privé ou équipe</li>
        <li>Programme d'entraînement personnalisé</li>
        <li>Préparation physique complète</li>
      </ul>
    </section>
  </main>;
};

export default Page;
