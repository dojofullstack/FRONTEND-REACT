import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import axios from 'axios';

const Home = () => {

  const [productos, setProductos] =  useState({});

  console.log(productos);

  const config = {
    imagenBanner: 'https://img.freepik.com/vector-premium/diseno-banner-tienda-al-aire-libre-zapatos-seguimiento_7605-855.jpg',
    domainName : 'tiendashoes.com'
  }


  useEffect(() => {
    console.log('recuperar productos de API');

    if (Object.keys(productos).length === 0 ){
        axios.get('https://dummyjson.com/products').then(data => {
          // console.log(data.data);
          setProductos(data.data);
        })
    }


  });



  return (
    <>
      <Header config={config} />
      <Main productos={productos} />
      <Footer  config={config} />
    </>
  );
};



export default Home;