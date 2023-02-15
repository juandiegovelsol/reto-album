import React from "react";
/* import rozesUnderTheGraveCover from "./rozes-utg.jpg"; */
import "./card.scss";

const Card = (props) => {
  const { imgSrc, artist, artistClass, albumName, year, buttonText } = props;
  return (
    <section>
      <article className="imgWrapper">
        <img src={imgSrc} alt="cover" />
      </article>
      <article className="contentWrapper">
        <header>
          <h2>{artist}</h2>
          <p>{artistClass}</p>
        </header>
        <main>
          <h3>{albumName}</h3>
          <p>{year}</p>
        </main>
        <footer>
          <button className="action">{buttonText}</button>
          <button className="like"></button>
        </footer>
      </article>
    </section>
  );
};

export default Card;
