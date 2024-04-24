import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import useStore from "../store";


export const FormCheckout = () => {
    const cartState = useStore(state => state.cartState);
    const profileUser = useStore(state => state.profileUser);

    const [Subtotal, setSubtotal] = useState(0);

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();

    const [metodoPay, setMetodoPay] = useState('card');


    useEffect(() => {
    
        const Quantity = 1;
        let subtotal = 0;
    
        cartState.forEach((producto) => {
          subtotal += producto.price * Quantity;
        })
    
        setSubtotal(subtotal);
    
      }, [cartState])



    useEffect(() => {

        if (Object.keys(profileUser).length > 1){
            setName(profileUser.firstName);
            setEmail(profileUser.email);
            setAddress(profileUser.address.address);
        }

    }, [profileUser])
    


    const completarPago = () => {
        console.log("recopilando datos..");
        console.log("metodoPay", metodoPay);
        console.log("name", name);
        console.log("email", email);
        console.log("address", address);
        console.log("cartState", cartState);
    }




  return (
    <>

    <Header/>

      <div className="flex gap-10 mx-auto justify-center mt-5 ">

        <div className="formulario-checkout flex flex-col mx-5">


          <h2 className="text-3xl font-bold">Datos del pedido</h2>
          <input
            onChange={(etiqueta) => setName(etiqueta.target.value)}
            type="text"
            placeholder="Nombre"
            value={name}
            className="my-2 input input-bordered input-primary w-full max-w-xs"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Ingresar email"
            className="my-2 input input-bordered input-primary w-full max-w-xs"
          />
          <input
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            type="text"
            placeholder="INgresar direccion"
            className="my-2 input input-bordered input-primary w-full max-w-xs"
          />


            <div className="checkout-payment mt-5">
                <h2 className="text-3xl font-bold">Elige tu metodo de pago</h2>


            <div className="form-control">
      <label className="label cursor-pointer justify-start">
      <input type="radio" name="radio-10" className="radio checked:bg-red-500" onChange={(e) => e.target.value === "on" && setMetodoPay("card") } />
        <span className="label-text ms-3 text-1xl font-bold">Tarjeta Debito/Credito</span> 
      </label>
    </div>
    <div className="form-control">
      <label className="label cursor-pointer justify-start">
        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" onChange={(e) => e.target.value === "on" && setMetodoPay("efectivo") } />
        <span className="label-text ms-3 text-1xl font-bold">Transferencia</span> 
      </label>
    </div>
    
    
            </div>



        </div>




        



        <div className="cart-checkout mx-5">

        <h2 className="text-3xl font-bold">Resumen del Carrito</h2>


        <div className="mt-8">
            <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                {cartState.map((product) => (
                    <li key={product.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                        src={product.images[0]}
                        className="h-full w-full object-cover object-center"
                        />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                        <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                            <a href={"#"}>{product.title}</a>
                            </h3>
                            <p className="ml-4">${product.price} USD</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{""}</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty {1}</p>

                        <div className="flex">
                            <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                            Eliminar
                            </button>
                        </div>
                        </div>
                    </div>
                    </li>
                ))}
                </ul>
            </div>
            </div>



            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${Subtotal} USD</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6" onClick={() => completarPago() }>
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Completar pago
                        </a>
                      </div>
              
                    </div>



        </div>





      </div>
    </>
  );
};
