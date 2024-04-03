import BlogMain from "../components/BlogMain";
import Footer from "../components/Footer";
import Header from "../components/Header";


const Blog = () => {

  const config = {
    imagenBanner: 'https://img.freepik.com/vector-premium/diseno-banner-tienda-al-aire-libre-zapatos-seguimiento_7605-855.jpg',
    domainName : 'tiendashoes.com'
  }



  return (
    <>
      <Header config={config} />
        <BlogMain/>
      <Footer />
    </>
  );
};



export default Blog;