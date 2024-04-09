import { Link, useParams } from "react-router-dom";
import filmes from "../../data/filmes.json";
import "./FilmeTemplate.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useState } from "react";

const TemplateFilme = () => {
  // Recebendo o parâmetro do ID pela url
  const parametros = useParams();
  const filme_exibido = filmes.filter((filme) => filme.id == parametros.id && filme)[0];

  // Utilizando cor do score baseado na nota
  if (parseInt(filme_exibido.score) > 70) {
    var cor_avaliacao = "#48D931";
  } else if (parseInt(filme_exibido.score) > 60) {
    var cor_avaliacao = "#D4C53A";
  } else {
    var cor_avaliacao = "#E7912D";
  }

  const [faixaEtariaCor, setFaixaEtariaCor] = useState("");

  // Definindo recomendações
  const filmes_similares = filmes.filter(
    (filme) =>
          filme.generos.join().search(filme_exibido.generos[0]) >= 0 
      &&
        filme.id != filme_exibido.id
  ).slice(0,3);

  const faixa_etaria_cor = filme_exibido.faixa_etaria[1]

  return (
    <section className="conteudo">
      <div>
        <img src={filme_exibido.poster}></img>
      </div>
      <div className="texto infos">
        <div>
          <h1 className="t1">{filme_exibido.titulo}</h1>
          <p className="ficha_tecnica">
            <span className="faixa_etaria" style={{"background-color": faixa_etaria_cor}}>{filme_exibido.faixa_etaria[0]}</span> •
            {"  "}
            {filme_exibido.lancamento} • {filme_exibido.generos.join("  |  ")} •{" "}
            {"  "}
            {filme_exibido.duracao}
          </p>
        </div>

        <p>
          <div className="score">
            
            <CircularProgressbar
              value={filme_exibido.score}
              text={`${filme_exibido.score}%`}
              background={true}
              backgroundPadding={5}
              styles={buildStyles({
                backgroundColor: "#000",
                textColor: "#fff",
                pathColor: `${cor_avaliacao}`,
                trailColor: "#383838",
                textSize: "26px",
              })}
            />{" "}
          </div>
          <span className="t2">Avaliação dos críticos</span>
        </p>

        <div>
          <h2 className="t2">Diretor</h2>
          <p>{filme_exibido.diretor}</p>
        </div>

        <div>
          <h2 className="t2">Sinopse</h2>
          <p>{filme_exibido.sinopse}</p>
        </div>
      </div>

      <aside className="similares">
        <h2 className="t2">Títulos similares</h2>
        <div className="similares__cards">
          {filmes_similares.map((filme_similar) => (
            <Link className="filme_similar" to={`../filme/${filme_similar.id}`}>
              {/* <div className="filme_similar"> */}
                <img src={filme_similar.poster}></img>
                <div className="filme_similar__desc">
                  <h3 className="p1">{filme_similar.titulo}</h3>

                  <p className="p2">
                    {filme_similar.duracao} • {filme_similar.lancamento}
                  </p>
                  <p className="p2 filme_similar__desc__info">
                    {filme_similar.sinopse}
                  </p>
                </div>
              {/* </div> */}
            </Link>
          ))}
        </div>
      </aside>
    </section>
  );
};

export default TemplateFilme;
