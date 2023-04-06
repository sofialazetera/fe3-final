import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
const {state} =useContext(ContextGlobal)
const { isthemeBlack, favorites } = state;

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favorites.map((fav)=>(
          <Card {...fav} key={fav.id} dentist={fav} />
        ))
        }
      </div>
    </>
  );
};

export default Favs;
