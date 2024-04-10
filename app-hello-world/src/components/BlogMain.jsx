import { useContext, useRef } from "react";
import appContext from "../context";
import { useNavigate } from "react-router-dom";



const BlogMain = () => {


  const {storeDataState, updateProfileUser, updateProducts, updateCart} = useContext(appContext);

  console.log('storeDataState', storeDataState);
  // console.log('updateProducts', updateProducts);

  const inputRef = useRef();

  return (
    <>

 
      <br/>

      <input ref={inputRef} placeholder="ingresar nombre"  />

      <button onClick={() => console.log(inputRef.current.value)}>mostrar nobre</button>

      <br/>

      <button onClick={() => updateProfileUser({'id': 1, 'name': inputRef.current.value, 'email': 'henry@gmail.com'})   }>Actualizat info del usuario</button>

      <br/>
      <button  onClick={() => updateProducts(['iphone', 'xiomin', 'samsung']) }  >Actualizar productos</button>


      <br/>
      <button  onClick={() => updateCart(['nokia', 'pixel']) }  >Agregar al cart</button>

      <section>
        <article>react es genial</article>
        <article>python es genial</article>
        <button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>

      </section>
    </>
  );
};


export default BlogMain;