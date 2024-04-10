import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import axios from 'axios';
import useStore from "../store";


export const Header = () => {

    const [searchInput, setSearchInput] =  useState('');

    const updateProducts = useStore((state) => state.updateProducts);
    // const products = useStore((state) => state.products);


    // console.log('products', products);

    const searchProduct = () => {
        const url = `https://dummyjson.com/products/search?q=${searchInput}`;
        axios.get(url).then(data => {
            updateProducts(data.data);
        })
    }    



  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-0">
          <label
            htmlFor="my-drawer"
            className="btn btn-secondary drawer-button"
          >
            <RxHamburgerMenu className="text-xl cursor-pointer" />
          </label>

          <a className="btn btn-ghost text-xl">
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
          <div className="flex gap-3 cursor-pointer">
            <FaUserCircle className="text-3xl" />
            <p className="text-lg">Ingresar</p>
          </div>
          {/* <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div> */}
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
