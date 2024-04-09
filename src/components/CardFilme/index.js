import './CardFilme.css'
import "../../styles/utils.css";
import "react-circular-progressbar/dist/styles.css";
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { useState } from 'react';

const CardFilme = ({ filme }) => {

    if (parseInt(filme.score) > 70) {
        var cor_avaliacao = "#48D931";
    } else if (parseInt(filme.score) > 60) {
      var cor_avaliacao = "#D4C53A";
    } else {
      var cor_avaliacao = "#E7912D";
    }

    const poster = filme.poster
  return (
    <Link className='' to={`/filme/${filme.id}`}>
      <li className="card_filme">
        <img src={poster} />
        <h1 className="p1">{filme.titulo}</h1>
        <p className="p2">
          {filme.generos[0]} • {filme.duracao}
        </p>
        <div className="progresso">
          <CircularProgressbar
            value={filme.score}
            text={`${filme.score}%`}
            background={true}
            backgroundPadding={5}
            styles={buildStyles({
              backgroundColor: "#000",
              textColor: "#fff",
              pathColor: `${cor_avaliacao}`,
              trailColor: "#383838",
              textSize: "26px",
            })}
          />
        </div>
      </li>
    </Link>
  );
}
 
export default CardFilme;