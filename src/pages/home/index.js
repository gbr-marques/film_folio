import Secao from '../../components/Secao';
import '../../styles/utils.css';
import "./Home.css";
import filmes from '../../data/filmes.json'
import { useState } from "react";


const Home = () => {

  const [genero, setGenero] = useState("Ação");

  const handleChange = (event, novoGenero) => {
    if (novoGenero !== null) {
      setGenero(novoGenero);
    }
  };

  const recomendados = [...filmes].sort(() => Math.random() - 0.5).slice(0, 9)

  const [estRecomendados, setEstRecomendados] = useState(recomendados)
  
  const lancamentos = [...filmes].sort(function (a, b) {
            return new Date(b.lancamento) - new Date(a.lancamento);
    }).slice(0, 9)
  
  const melhores_filmes = [...filmes]
    .sort(function (a, b) {
      return b.score - a.score;
    }).slice(0, 9);
  
  const filtro_genero = [...filmes]
    .filter(
      (filme) =>
        filme.generos[0] === genero ||
        filme.generos[1] === genero ||
        filme.generos[2] === genero
  ).slice(0, 9);
  

    return (
      <section className="home">
        <Secao
          filtro_genero="false"
          titulo="Recomendamos para você"
          lista={estRecomendados} />
        <Secao
          filtro_genero="false"
          titulo="Lançamentos"
          lista={lancamentos} />
        <Secao
          valorGenero={genero}
          aoMudarGenero={handleChange}
          filtro_genero="true"
          titulo="Filtrar por gênero"
          lista={filtro_genero} />
        <Secao
          filtro_genero="false"
          titulo="Melhores avaliações"
          lista={melhores_filmes} />
      </section>
    );
}
 
export default Home;