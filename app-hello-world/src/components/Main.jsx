import { useState } from "react";

const Carousel = () => {
  const anchoCarousel = "100%";

  return (
    <>
      <div>
        <img
          width={anchoCarousel}
          src="https://as1.ftcdn.net/v2/jpg/03/19/30/02/1000_F_319300214_e4wHf3yWgL2Gf8JW9kA1mGRHMYyw6v0b.jpg"
        />
      </div>
    </>
  );
};

const Main = ({ productos }) => {
  const [numeroVisitas, setNumeroVisitas] = useState(1);
  const [nombre, setNombre] = useState("");

  // console.log("numeroVisitas y productos", numeroVisitas, productos);

  return (
    <>
      <div>
        <Carousel />
        <h3>App Main</h3>
        <b>numeroVisitas es: {numeroVisitas}</b> <br />
        <b>Nombres es: {nombre}</b>
        <div>
          <button onClick={() => setNumeroVisitas(numeroVisitas + 1)}>
            Actualizar Visitasntes
          </button>

          <input
            placeholder="IINgresa tu nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          voluptates sint voluptatem sequi magnam quisquam. Exercitationem
          dignissimos nostrum, quia, nulla eveniet dolor provident consequatur
          alias repellendus ullam, minus hic porro.
        </p>
        <div className="d-flex flex-wrap">
          {productos?.products?.map((data, index) => (
            <div class="card" style={{ width: "18rem" }} key={index}>
              <img
                class="card-img-top"
                src={data.images[0]}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">{data.title}</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
