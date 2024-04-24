import { useEffect } from "react";
import useStore from "../store";
import { useNavigate } from "react-router-dom";



export const Main = () => {

    const products = useStore((state) => state.products);
    const getAllProduct = useStore((state) => state.getAllProduct);
    const navigate = useNavigate();

    // console.log("products", products);

    useEffect(() => {
        if (Object.keys(products) == 0){
            getAllProduct();
        }
    }, [products])

    return (
        <>

                <div className="flex flex-wrap">
                        {
                        products?.products?.map((item, index) => (
                            <div key={index} className="cursor-pointer card card-compact w-[300px] bg-base-100 shadow-xl mx-3 " onClick={() => navigate(`/detalle/${item.id}`)} >
                                <figure><img src={item.images[0]} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{item.title}</h2>
                                    <p>{item.description}</p>
                                    <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Ver Detalles</button>
                                    </div>
                                </div>
                                </div>
                        ))
                    }
                </div>
        
            

        </>
    )
}