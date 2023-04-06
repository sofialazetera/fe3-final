import { createContext, useState, useEffect, useReducer } from "react";

//Busco todos los favs guardados en storage
export const getAllFavsFromStorage = () => {
  const localDataFavs = localStorage.getItem("FAVDentists");
  return localDataFavs ? JSON.parse(localDataFavs) : [];
};

//funcion para guardar todos los favs en storage
export const saveAllFavsFromStorage = (todos) => {
  localStorage.setItem("FAVDentists", JSON.stringify(todos));
};

//funcion reducer
export const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, isthemeBlack: !state.isthemeBlack };
    case "ADD_TO_FAV":
      const updatedFavs = [...state.favorites, action.payload];
      saveAllFavsFromStorage(updatedFavs);
      return { ...state, favorites: updatedFavs };
    case "REMOVE_FROM_FAV":
      const favFiltered = state.favorites.filter(
        (item) => item.id !== action.payload.id
      );
      saveAllFavsFromStorage(favFiltered);
      return { ...state, favorites: favFiltered };
    case "SET_DENTISTS":
      return { ...state, dentists: action.payload };
    default:
      return state;
  }
};

const getDentists = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const initialState = {
  isthemeBlack: false,
  favorites: getAllFavsFromStorage(),
  dentists: []
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDentists().then((data) => {
      dispatch({ type: "SET_DENTISTS", payload: data });
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;


