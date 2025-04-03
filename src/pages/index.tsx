import "./index.scss";
import ClubIcon from "~/assets/images/icon.svg?react";
import DropDown from "~/components/DropDown/index";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import BigTeam from "~/assets/images/big_team.webp";
import SmallTeam from "~/assets/images/small_team.webp";
import Combat from "~/assets/images/combat.webp";
import Gear from "~/assets/images/gear.webp";
import Trainers from "~/assets/images/trainers.webp";

export const Component = () => {
  const prestations = [
    {
      title: "Boxe thaïlandaise",
      details: ["Enfants", "Adultes (débutants - avancés)"],
      isDeployed: false,
    },
    {
      title: "Punch 'n' fit",
      details: ["Renforcement musculaire", "Cardio"],
    },
    {
      title: "Coaching privé",
      details: [
        "Programme d’entraînement personnalisé",
        "Préparation physique",
        "Personnel ou équipe",
      ],
    },
  ];

  const images: {
    src: string;
  }[] = [
    { src: BigTeam },
    { src: SmallTeam },
    { src: Combat },
    { src: Gear },
    { src: Trainers },
  ];

  return (
    <main>
      <section className="intro">
        <ClubIcon />
        <p>Bienvenue au</p>
        <h1>Siam Gym</h1>
      </section>
      <section className="offers">
        <h2>Nos prestations</h2>
        <ul>
          {prestations.map((prestation, index) => {
            return (
              <li key={index}>
                <DropDown title={<span>{prestation.title}</span>}>
                  <ul>
                    {prestation.details.map((detail, index) => (
                      <li className={"plainBullet"} key={index}>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </DropDown>
              </li>
            );
          })}
        </ul>
        <span className={"center"}>
          Plus d'informations sur <a href="/cours">la page des cours</a>
        </span>
      </section>
      <section className="gallery">
        <h2>Galerie</h2>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={images.length}
        >
          <ButtonBack>&larr;</ButtonBack>
          <Slider>
            {images.map((image, index) => (
              <Slide index={index} key={index}>
                <img src={image.src} alt="" />
              </Slide>
            ))}
          </Slider>
          <ButtonNext>&rarr;</ButtonNext>
        </CarouselProvider>
      </section>
      <section className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d168.94476900484486!2d7.403032938974039!3d47.35112724366917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791ddbb05bd273d%3A0x97b7b54d5e7a3a92!2sSiam%20Gym!5e0!3m2!1sen!2sch!4v1743699632757!5m2!1sen!2sch"
          loading="lazy"
          className="full-width"
        />
      </section>
    </main>
  );
};

export default Component;
