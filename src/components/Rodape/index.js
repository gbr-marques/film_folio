import "./Rodape.css"
import { FaGithub } from 'react-icons/fa'

const Rodape = () => {
    
    const Redirect = () => {
        window.location.assign("https://github.com/gbr-marques")
      }    

    return ( 

        <div className="rodape">
           <p>Desenvolvido por <span>Gabriel Marques</span></p> 
           <p className="rodape__link" onClick={Redirect}> <FaGithub className="rodape__link__icone"/> Confira outros projetos</p>
        </div>

     );
}
 
export default Rodape;