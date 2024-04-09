import "./NavBar.css"
import Logo from "../../assets/Logo.png"
import filmes from '../../data/filmes.json'
import { useState } from "react";
import ResultadoPesquisa from "../ResultadoPesquisa";
import { FaGithub } from 'react-icons/fa'

const NavBar = () => {

  const Redirect = () => {
    window.location.assign("https://github.com/gbr-marques")
  }

  const [valorInput, setValorInput] = useState("")

  const [filmesPesquisados, setFilmesPesquisados] = useState([])

  const checaPesquisa = (event) => {
    
    setValorInput(event.target.value);

    valorInput.length > 1 ?
        setFilmesPesquisados(filmes.filter(
          (filme) => filme.titulo.slice(0, valorInput.length).toLowerCase() == valorInput.toLowerCase()))
      :
        setFilmesPesquisados([])
  }

  const limpaInput = (event) => {
    setTimeout(() => {
       setFilmesPesquisados([]);
       setValorInput("")
       event.target.value = ""
     }, "150")
    
  }

    return (
      <nav className="nav">
        <img src={Logo}></img>
        <input className="nav__pesquisa" defaultValue={valorInput} placeholder="Pesquise por seus filmes favoritos..." onChange={checaPesquisa} onBlur={limpaInput}></input>
        
        <a className="nav_git" onClick={Redirect}>
          <FaGithub className="git_logo" size={32}/>
            <h2 className="t2">Mais projetos</h2>
        </a>
          
        <div className="res_container">
          {filmesPesquisados.map(((filme) => (
              <ResultadoPesquisa filmePesquisado={filme}></ResultadoPesquisa>
          )))}
          {/* })} */}
        </div>
      </nav>
    );
}
 
export default NavBar;
