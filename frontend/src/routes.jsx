import { BrowserRouter, Routes, Route} from "react-router";

import Login from "./pages/Login/Login"
import Cadastro from "./pages/Cadastro/Cadastro"

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/Cadastro" element={<Cadastro/>}/>
            </Routes>
        </BrowserRouter>
    )
}