import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { create } from 'zustand'



const addProductToCart = (set, product) => {

  set((state) => ({ cartState: [...state.cartState, product]}));

}

const closeLogin = (set) => {

  localStorage.removeItem("token");
  set({
    profileUser: {},
    isLogin: false,
  });

  // window.location.href = "/login";
  
} 


const getDetailProduct = (set, idProduct) => {
  const url = `https://dummyjson.com/products/${idProduct}`;
  axios.get(url).then(data => {
      set({
        productDetail: data.data
      });
  })
} 




const getAllProduct = (set) => {
  const url = `https://dummyjson.com/products`;
  axios.get(url).then(data => {
      set({
        products: data.data
      });
  })
} 



const loginInit = (set) => {

  const urlAuth = "https://dummyjson.com/auth/me";

  const token = localStorage.getItem("token");

  // console.log("token", token);


  if (token != null){

      // console.log("token", token);

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }


      axios.get(urlAuth, {
        headers: headers
      } ).then(data => {
        console.log("login iinnit auth", data.data);
        set({
          profileUser: data.data,
          isLogin: true
        })

      })


  }


}




const loginAuth = (set, username , password) => {

  const urlAuth = "https://dummyjson.com/auth/login";
  const data = {
    username: username,
    password: password,
  }

  axios.post(urlAuth, data).then(data => {
    // console.log("login auth data", data.data);
    set({
      profileUser: data.data,
      isLogin: true
    })

    // obtener token y guardar en LocalStorage o las cookies
    const token = data.data.token;
    localStorage.setItem("token", token);

  })

}



const useStore = create((set) => ({
  isLogin: false,
  loginAuth: (username , password) => loginAuth(set, username , password),
  loginInit: () => loginInit(set),
  products: [],
  productDetail: {},
  getDetailProduct: (idProduct) => getDetailProduct(set, idProduct),
  getAllProduct: () => getAllProduct(set),
  updateProducts: (data) => set({ products: data }),
  profileUser: {},
  closeLogin: () => closeLogin(set),
  cartState: [],
  addProductToCart: (product) => addProductToCart(set, product)
}))


export default useStore;