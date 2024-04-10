import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Blog from "./views/Blog";
import appContext, { storeData } from "./context";
import { useState } from "react";
import Profile from "./views/Profile";

const Rutas = () => {

    const [storeDataState, setStoreDataState ] = useState(storeData);


    const updateCart = (data) => {

        setStoreDataState(storeDataState => (
            {
                ...storeDataState,
                cart: data
            }
        ));

    } 


    const updateProducts = (data) => {
        
        setStoreDataState(storeDataState => (
            {
                ...storeDataState,
                products: data
            }
        ));

    }


    const updateProfileUser = (data) => {


        setStoreDataState(storeDataState => (
            {
                ...storeDataState,
                profileUser: data
            }
        ));

    }



    return (
    <appContext.Provider value={{
        storeDataState: storeDataState,
        updateProfileUser: updateProfileUser,
        updateProducts: updateProducts,
        updateCart: updateCart
    }} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </appContext.Provider>
  );
};

export default Rutas;
