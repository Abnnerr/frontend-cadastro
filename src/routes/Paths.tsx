import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;