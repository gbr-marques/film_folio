import "./Secao.css";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import CardFilme from "../CardFilme";

const botoes = [
  <ToggleButton className="botao" value="Ação" key="Ação">
    Ação
  </ToggleButton>
  ,
  <ToggleButton className="botao" value="Aventura" key="Aventura">
    Aventura
  </ToggleButton>
  ,
  <ToggleButton className="botao" value="Drama" key="Drama">
    Drama
  </ToggleButton>
  ,
  <ToggleButton className="botao" value="Comédia" key="Comédia">
    Comédia
  </ToggleButton>
  ,
  <ToggleButton className="botao" value="Suspense" key="Suspense">
    Suspense
  </ToggleButton>,
  ,
  <ToggleButton className="botao" value="Romance" key="Romance">
    Romance
  </ToggleButton>,
  ,
  <ToggleButton className="botao" value="Documentário" key="Documentário">
    Documentário
  </ToggleButton>,
  ,
  <ToggleButton className="botao" value="Terror" key="Terror">
    Terror
  </ToggleButton>,
  ,
  <ToggleButton className="botao" value="Fantasia" key="Fantasia">
    Fantasia
  </ToggleButton>
  ,
  <ToggleButton className="botao" value="Ficção Científica" key="Ficção Científica">
    Ficção Científica
  </ToggleButton>
];

const Secao = ({ aoMudarGenero, valorGenero, titulo, lista, filtro_genero }) => {
  

  const slider = document.querySelector('.teste')
  let isDown = false;
  let startX;
  let scrollLeft;

  const mouseDown = (event) => {
    isDown = true;
    startX = event.pageX - slider.off
    scrollLeft = slider.scrollLeft;

  }

  const mouseLeave = () => {
    isDown = false;
  }

  const mouseUp = () => {
    isDown = false;
  }

  const mouseMove = (event) => {
    if (!isDown) return
    event.preventDefault()
    const x = event.pageX - slider.offsetLeft
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
  }

  return (
    <section
      className="secao"
      // onMouseDown={mouseDown}
      // onMouseLeave={mouseLeave}
      // onMouseUp={mouseUp}
      // onMouseMove={mouseMove}
    >
      <div className="secao__cabecalho">
        <h1 className="t1">{titulo}</h1>

        {filtro_genero == "true" ? (
          <ToggleButtonGroup
            onChange={aoMudarGenero}
            value={valorGenero}
            className="botao__grupo"
            size="small"
            exclusive
          >
            {botoes}
          </ToggleButtonGroup>
        ) : (
          ""
        )}
      </div>

      <ul>
        {lista.map((filme) => (
          <CardFilme key={filme.id} filme={filme} />
        ))}
      </ul>
    </section>
  );
};

export default Secao;
