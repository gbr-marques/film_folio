import { Link } from "react-router-dom";
import "./ResultadoPesquisa.css"

const ResultadoPesquisa = ({filmePesquisado}) => {

    return (
        <>
            <Link className="res_filme_container" to={`/filme/${filmePesquisado.id}`}>
                <div className="res_filme">
                    <img src={filmePesquisado.poster}></img>
                    <h2>{filmePesquisado.titulo}</h2>
                    <p>{filmePesquisado.generos[0]} • {filmePesquisado.duracao}</p>
                </div>
            </Link>
        </>
    )

}

export default ResultadoPesquisa;