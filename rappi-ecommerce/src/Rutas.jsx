import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home";
import { DetalleItem } from "./views/DetalleItem";
import { FormCheckout } from "./views/FormCheckout";


const Rutas = () => {

    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalle/:idProduct" element={<DetalleItem />} />
          <Route path="/login" element={<Login />} />
          <Route path="/formulario-checkout" element={<FormCheckout />} />
        </Routes>
      </BrowserRouter>
    )

}

export default Rutas;