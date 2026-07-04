import "./index.scss";
import ScrollView from "~/components/ScrollView";
import ThePlanning from "./thePlanning.tsx";

export const Component = () => {
  return (
    <main className="page-cours">
      <section className="intro">
        <h1 className="font-bold">Nos cours</h1>
      </section>
      <section className="planning">
        <h2 className="text-2xl font-bold my-4">Horaires</h2>
        <ThePlanning />
      </section>
      <section className="prices">
        <h2 className="text-2xl font-bold my-4">Nos abonnements</h2>
        <p className="text-(--accent) font-bold text-lg my-4">
          Les abonnements mensuels sont basés sur les mois civils!
        </p>
        <div className="subsection subs">
          <section className="flex flex-col md:flex-row">
            <div className="w1 md:border-0!">
              <div className="price-table">
                <h4 className="font-bold text-lg my-3">Muay thaï</h4>
                <div className="price-table-container">
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>1 mois</th>
                        <th>&ge;3 mois</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Enfant</td>
                        <td>30.-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Etudiant</td>
                        <td>60.-</td>
                        <td>55.-/mois</td>
                      </tr>
                      <tr>
                        <td>Adulte</td>
                        <td>70.-</td>
                        <td>65.-/mois</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="w1">
              <div className="price-table">
                <h4 className="font-bold text-lg my-3">Punch'n'Fit</h4>
                <div className="price-table-container">
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
            </div>
          </section>
        </div>
      </section>
      <section>
        <div className="subsection unique-courses">
          <h2 className="font-bold text-2xl my-4">Cours uniques</h2>
          <p className="py-4">
            Vous pouvez participer à un seul cours pour le prix de 15.- par
            cours.
          </p>
        </div>
        <div className="subsection multicourse">
          <h2 className="font-bold text-2xl my-4">Carte multicours</h2>
          <p className="py-4">
            Si vous souhaitez participer à plusieurs cours, nous avons un
            programme de fidélité.
          </p>
          <div className="price-table-container">
            <table>
              <thead>
                <tr>
                  <th>Nbre Cours</th> <th>Prix</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>5</td> <td>70.-</td>
                </tr>
                <tr>
                  <td>10</td> <td>130.-</td>
                </tr>
                <tr>
                  <td>15</td> <td>180.-</td>
                </tr>
                <tr>
                  <td>20</td> <td>220.-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section>
        <div className="subsection on-demand">
          <h2 className="font-bold text-2xl my-4">Cours sur demande</h2>
          <ul className="my-4">
            <li>Coaching privé ou équipe</li>
            <li>Programme d'entraînement personnalisé</li>
            <li>Préparation physique complète</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Component;
