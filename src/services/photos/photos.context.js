import React, {useState, useContext} from "react"

export const PhotosContext = useContext();

export const PhotosContextProvider = ({children}) => {

    const [favorites, setFavorites] = useState([]);

    const add = (photo) => {
        setFavorites([...favorites, photo]);
    }

    const remove = (photo) => {
        const newFavorites = favorites.filter((x) => x.name != photo.name)
        setFavorites(newFavorites)
    }
    return(
    <FavoritesContext.Provider value={{
        favorites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}>
{children}
    </FavoritesContext.Provider>
    )
}