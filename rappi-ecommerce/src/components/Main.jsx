import useStore from "../store";



export const Main = () => {

    const products = useStore((state) => state.products);

    return (
        <>

                <div className="flex flex-wrap">
                        {
                        products?.products?.map((item, index) => (
                            <div key={index} className="card card-compact w-[300px] bg-base-100 shadow-xl mx-3 ">
                                <figure><img src={item.images[0]} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{item.title}</h2>
                                    <p>{item.description}</p>
                                    <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Comprar</button>
                                    </div>
                                </div>
                                </div>
                        ))
                    }
                </div>
        
            

        </>
    )
}