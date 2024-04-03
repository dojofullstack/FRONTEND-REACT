import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Blog from "./views/Blog";



const Rutas = () => {
    return (
        <BrowserRouter>

                <Routes>

                    <Route path="/" element={<Home/>}  />
                    <Route path="/blog" element={<Blog/>}  />

                </Routes>

        </BrowserRouter>
    )
}

export default Rutas;