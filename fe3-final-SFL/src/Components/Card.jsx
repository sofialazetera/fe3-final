import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ dentist }) => {
  const { state, dispatch } = useContext(ContextGlobal);
  const { isthemeBlack, favorites } = state;
  const [isCurrentCardFavourite, setIsCurrentCardFavorite] = useState(false);

  const checkFavourite = () => {
    let filtered = favorites.filter((currentItem) => currentItem.id === dentist.id);
    return filtered.length > 0;
  };

  useEffect(() => {
    setIsCurrentCardFavorite(checkFavourite());
  }, [favorites]);

  const addFav = (dentist) => {
    dispatch({ type: "ADD_TO_FAV", payload: dentist });
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  const removeFav =(dentist) =>{
    dispatch({type: "REMOVE_FROM_FAV", payload:dentist})
  }

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <Link to={`/dentist/${dentist.id}`}>
        <h2>{dentist.name}</h2>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
      </Link>
      
        <button
          className={`favButton ${isthemeBlack && "dark"}`}
          onClick={() =>!isCurrentCardFavourite ? addFav(dentist): removeFav(dentist)}
        >
          {isCurrentCardFavourite ? "Remove from favorites" : "Add to favorites"}
        </button>
      
    </div>
  );
};

export default Card;
