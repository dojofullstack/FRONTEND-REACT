// function Header() {
//   return (
//     <>
//       <p>hola</p>
//       <h1>title</h1>
//       <button>clk</button>
//     </>
//   );
// }


const Header = ({config}) => {
    // console.log(config);
    return (
            <>
                <img height='90px' src={config.imagenBanner}  />
                <h1>{config.domainName}</h1>
            </>
          );
}

export default Header;
