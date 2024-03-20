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

const Main = () => {
  return (
    <>
      <div>
        <Carousel />
        <h3>App Main</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          voluptates sint voluptatem sequi magnam quisquam. Exercitationem
          dignissimos nostrum, quia, nulla eveniet dolor provident consequatur
          alias repellendus ullam, minus hic porro.
        </p>
      </div>
    </>
  );
};

export default Main;
