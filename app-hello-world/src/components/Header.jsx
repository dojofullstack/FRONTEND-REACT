
import { useNavigate } from "react-router-dom";

const Header = ({ config }) => {
  // console.log(config);

  const navigate = useNavigate();


  return (
    <>
      <img height="90px" src={config.imagenBanner} />
      <h1>{config.domainName}</h1>

      <button className="btn btn-primary" onClick={() => navigate("/")}>
        Ir al Home
      </button>
      <button className="btn btn-secondary" onClick={() => navigate("/blog")}>
        Ir al Blog
      </button>
      <br />
    </>
  );
};

export default Header;
