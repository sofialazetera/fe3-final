import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Navbar = () => {
  const { state: { isthemeBlack }, dispatch } = useContext(ContextGlobal);

  function changeTheme() {
    dispatch({ type: "TOGGLE_THEME" });
  }

  return (
    <nav className={isthemeBlack ? "dark" : ""}>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/favs">Favs</Link>
        </li>
      </ul>
      <button className={isthemeBlack ? "dark" : ""} onClick={changeTheme}>
        {isthemeBlack ? "🌞" : "🌑"}
      </button>
    </nav>
  );
};

export default Navbar;



// import React, { useContext } from "react";
// import {Link} from "react-router-dom"
// import { ContextGlobal } from "./utils/global.context";

// //Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

// const Navbar = () => {
//   const { state:{isthemeBlack}, dispatch} = useContext(ContextGlobal);

//   function changeTheme(){
//     dispatch({ type: "TOGGLE_THEME"  })
//   }
//   console.log(isthemeBlack);
//   return (
//     <nav>
//       {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
//       <button  className = {isthemeBlack && 'dark'}>
//         <Link to="/home">Home</Link>
//       </button>
//       <button className = {isthemeBlack && 'dark'}>
//         <Link to="/contact">Contact</Link>
//       </button>
//       <button className = {isthemeBlack && 'dark'}>
//         <Link to="/favs">Favs</Link>
//       </button>
//       {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
//       <button  className = {isthemeBlack && 'dark'}onClick={() =>  changeTheme()  }>Change theme</button>
//     </nav>
//   );
// };

// export default Navbar;
