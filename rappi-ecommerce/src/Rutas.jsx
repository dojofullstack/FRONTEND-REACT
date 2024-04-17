import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home";
import { DetalleItem } from "./views/DetalleItem";



const Rutas = () => {

    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalle/:idProduct" element={<DetalleItem />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    )

}

export default Rutas;