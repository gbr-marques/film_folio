import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import Rodape from "./components/Rodape";
import "./Main.css";
import TemplateFilme from "./components/TemplateFilme";


const AppRoutes = () => {
  return (
    <div>
      <main>
        <BrowserRouter>
          <Link to="/">
            <NavBar />
          </Link>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/filme/:id" element={<TemplateFilme />} />
          </Routes>
          <Link to="/">
            <Rodape />
          </Link>
        </BrowserRouter>
      </main>
    </div>
  );
}
 
export default AppRoutes;