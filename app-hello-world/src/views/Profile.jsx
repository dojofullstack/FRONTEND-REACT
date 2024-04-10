import BlogMain from "../components/BlogMain";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useStoreDojo from "../store";


const Profile = () => {


    const cart =  useStoreDojo((state) => state.cart);
    const profileUser =  useStoreDojo((state) => state.profileUser);
    const updateCart =  useStoreDojo((state) => state.updateCart);
    const updateProfileUser =  useStoreDojo((state) => state.updateProfileUser);

    console.log('cart', cart);
    console.log('profileUser', profileUser);


  const config = {
    imagenBanner: 'https://img.freepik.com/vector-premium/diseno-banner-tienda-al-aire-libre-zapatos-seguimiento_7605-855.jpg',
    domainName : 'tiendashoes.com'
  }



  return (
    <>
      <Header config={config} />

        <>

        <button className="btn btn-success" onClick={() => updateCart(['xiomi', 'iphone']) }>update cart con zustand</button>
        
            <br/>

        <button className="btn btn-primary" onClick={() => updateProfileUser({'id':1 , 'name': 'pedro'}) }>update profile user</button>

        
        </>

      <Footer />
    </>
  );
};



export default Profile;