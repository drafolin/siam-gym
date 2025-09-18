import "./index.scss";
import ClubIcon from "~/assets/images/icon.svg?react";
import DropDown from "~/components/DropDown/index";
import { useState } from "react";
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

  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitionning, setIsTransitionning] = useState<
    "next" | "prev" | false
  >(false);

  const images: {
    src: string;
  }[] = [
    { src: BigTeam },
    { src: SmallTeam },
    { src: Combat },
    { src: Gear },
    { src: Trainers },
  ];

  const handleGalleryNext = () => {
    setIsTransitionning("next");
    setTimeout(() => {
      setIsTransitionning(false);
      setCurrentImage((currentImage + 1) % images.length);
    }, 1000);
  };

  const handleGalleryPrev = () => {
    setIsTransitionning("prev");
    setTimeout(() => {
      setCurrentImage((currentImage - 1 + images.length) % images.length);
      setIsTransitionning(false);
    }, 1000);
  };

  return (
    <main>
      <section className="intro">
        <ClubIcon />
        <p className="my-4">Bienvenue au</p>
        <h1 className="font-bold">Siam Gym</h1>
      </section>
      <section className="offers">
        <h2 className="my-3 text-2xl font-bold">Nos prestations</h2>
        <ul className="my-4">
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
        <h2 className="text-2xl font-bold my-3">Galerie</h2>
        <div className="relative h-[75vh] overflow-hidden">
          <div
            className={`absolute top-0 right-full w-full h-full flex flex-col justify-center ${
              isTransitionning === "prev"
                ? "duration-1000 transition-transform translate-x-full"
                : ""
            }`}
          >
            <img
              className="h-full object-cover"
              src={
                images[(currentImage - 1 + images.length) % images.length].src
              }
            />
          </div>
          <div
            className={`absolute top-0 right-0 left-0 w-full h-full flex flex-col justify-center ${
              isTransitionning === "prev"
                ? "duration-1000 transition-transform translate-x-full"
                : ""
            } ${
              isTransitionning === "next"
                ? "duration-1000 transition-transform -translate-x-full"
                : ""
            }`}
          >
            <img
              className="h-full object-cover"
              src={images[currentImage].src}
            />
          </div>
          <div
            className={`absolute top-0 left-full w-full h-full flex flex-col justify-center ${
              isTransitionning === "next"
                ? "duration-1000 transition-transform -translate-x-full"
                : ""
            }`}
          >
            <img
              className="h-full object-cover"
              src={images[(currentImage + 1) % images.length].src}
            />
          </div>
          <button
            className="absolute left-0 top-0 bottom-0 w-12 bg-neutral-700/40 hover:bg-neutral-700 transition-all transition-300 cursor-pointer"
            onClick={handleGalleryPrev}
          >
            &larr;
          </button>
          <button
            className="absolute right-0 top-0 bottom-0 w-12 bg-neutral-700/40 hover:bg-neutral-700 transition-all transition-300 cursor-pointer"
            onClick={handleGalleryNext}
          >
            &rarr;
          </button>
        </div>
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
