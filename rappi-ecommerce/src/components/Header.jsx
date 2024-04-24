import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState, Fragment } from "react";
import axios from 'axios';
import useStore from "../store";
import { useNavigate } from "react-router-dom";
import { Dialog, Transition } from '@headlessui/react'
import { FaXmark } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const products = [
//   {
//     id: 1,
//     name: 'Throwback Hip Bag',
//     href: '#',
//     color: 'Salmon',
//     price: '$90.00',
//     quantity: 1,
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
//     imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
//   },
//   {
//     id: 2,
//     name: 'Medium Stuff Satchel',
//     href: '#',
//     color: 'Blue',
//     price: '$32.00',
//     quantity: 1,
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
//     imageAlt:
//       'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
//   },
//   // More products...
// ]


const CartModal = ({open, setOpen}) => {

  const cartState = useStore(state => state.cartState);
  const isLogin = useStore(state => state.isLogin);

  const [Subtotal, setSubtotal] = useState(0);

  const navigate = useNavigate();


  useEffect(() => {
    
    const Quantity = 1;
    let subtotal = 0;


    cartState.forEach((producto) => {
      subtotal += producto.price * Quantity;
    })

    setSubtotal(subtotal);


  }, [cartState])


  return (
<Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Cart Resumen</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <FaXmark className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

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
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${Subtotal} USD</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      
                      
                      <div className="mt-6" onClick={() => {
                          if (isLogin) {
                            navigate("/formulario-checkout");
                          } else {
                            navigate("/login");
                          }
                      } }>
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>


                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>


                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}



export const Header = () => {

  const [open, setOpen] = useState(false);


    const [searchInput, setSearchInput] =  useState('');

    const updateProducts = useStore((state) => state.updateProducts);
    const loginInit = useStore((state) => state.loginInit);
    const closeLogin = useStore((state) => state.closeLogin);
    // const products = useStore((state) => state.products);

    const isLogin = useStore((state) => state.isLogin );
    const profileUser = useStore((state) => state.profileUser );


    const navigate = useNavigate();



    // console.log('products', products);

    const searchProduct = () => {
        const url = `https://dummyjson.com/products/search?q=${searchInput}`;
        axios.get(url).then(data => {
            updateProducts(data.data);
        })
    } 


    useEffect(() => {

      if (!isLogin && Object.keys(profileUser) == 0 ){
        loginInit();
      }

    }, [isLogin, profileUser])



  return (
    <>
    <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

      <CartModal open={open} setOpen={setOpen} />

      <div className="navbar bg-base-100">
        <div className="flex-0">
          <label
            htmlFor="my-drawer"
            className="btn btn-secondary drawer-button"
          >
            <RxHamburgerMenu className="text-xl cursor-pointer" />
          </label>

          <a className="btn btn-ghost text-xl" onClick={() => navigate("/")} >
            <img
              className="h-[30px]"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Rappi_logo.svg/2560px-Rappi_logo.svg.png"
            />
          </a>
        </div>

        <div className="w-full ms-10">
          <div className="form-control">
            <input
                onKeyDown={(e) => {
                    if (e.code === 'Enter'){
                        // console.log('buscar producto', searchInput);
                        searchProduct();
                    }
                } }
                onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              placeholder="Buscador de productos"
              className="input input-bordered w-[500px] "
            />
          </div>
        </div>

        <div className="flex-none gap-2">
              
              <div className="mx-5" onClick={() => setOpen(true)} >
                 <FaCartShopping className="text-3xl cursor-pointer"  />
              </div>

   {!isLogin &&
          <div className="flex gap-3 cursor-pointer" onClick={() => navigate("/login")}>
            <FaUserCircle className="text-3xl" />
            <p className="text-lg">Ingresar</p>
          </div>
    }


      {isLogin && Object.keys(profileUser).length > 1 &&
          (<div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={profileUser.image}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Perfil {profileUser.firstName}
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Configuracion</a>
              </li>
              <li onClick={() => closeLogin()}>
                <a>Cerra sesion</a>
              </li>
            </ul>
          </div>)
          }

        </div>
      </div>

      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{/* Page content here */}</div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}

            <div className="flex flex-col">
              <img
                className="h-[30px] w-[150px] my-5"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Rappi_logo.svg/2560px-Rappi_logo.svg.png"
              />

              <div>
                <button className="btn-primary  btn mx-3">Ingresar</button>
                <button className="btn-secondary  btn mx-3">Registro</button>
              </div>
            </div>

            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
