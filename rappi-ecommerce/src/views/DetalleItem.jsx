import { useParams } from "react-router-dom"



export const DetalleItem = () => {

    const {idProduct} = useParams();
    // const {slugProduct} = useParams();

    console.log("idProduct", idProduct);


    return (
        <>
        <h1>DEtalle del producto {idProduct}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut reprehenderit beatae! Corrupti alias reiciendis amet doloremque voluptas ab recusandae?</p>
        </>
    )
}