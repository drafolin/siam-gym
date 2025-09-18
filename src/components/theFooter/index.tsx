import "./style.scss";
import Comte from "~/assets/images/Comte.svg?react";
import PhoneIcon from "~/assets/images/phone.svg?react";
import EmailIcon from "~/assets/images/email.svg?react";
import InstagramIcon from "~/assets/images/insta.svg?react";
import { ReactElement } from "react";
import JBSA from "~/assets/images/jbsa.svg?react";

export const Footer = () => {
  const sponsors: {
    image: ReactElement | string;
    website: string;
    name: string;
  }[] = [
    {
      image: <Comte className={"recolor"} />,
      name: "Comte - Bâtiments et génie civil",
      website: "https://www.gcomte.ch/fr/index.html",
    },
    {
      image: <JBSA className={"recolor"} />,
      name: "JBSA Décolletage - 2746 Crémines",
      website: "https://www.jeanbaertschisa.ch/",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <section className="contact">
        <ul className="my-4">
          <li>
            <a href="https://instagram.com/siam_gym_ju" target={"_blank"}>
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="mailto:siam.gym.ju@gmail.com" target={"_blank"}>
              <EmailIcon />
            </a>
          </li>
          <li>
            <a href="tel:+41789564648">
              <PhoneIcon />
            </a>
          </li>
        </ul>
      </section>
      <section className="sponsors">
        <p className="my-4">Nos collaborateurs</p>
        <ul className="my-4">
          {sponsors.map((v, i) => (
            <li key={i}>
              <a href={v.website}>
                {typeof v.image === "string" ? (
                  <img src={v.image} alt={v.name} />
                ) : (
                  v.image
                )}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className="copyright">
        <p className="my-4">
          &copy; 2023{currentYear !== 2023 ? `-${currentYear}` : ""}{" "}
          <a href="https://drafolin.ch">Dråfølin</a>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
