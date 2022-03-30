import React, {useContext, useState} from "react"


export const FavoritesContext = useContext();

export const FavoritesContextProvider = ({children}) => {

  
    const [photoList, setPhotoList] = useState([]);

    const addPhoto = () => {
     setPhotoList([...photoList, [photo]])
      console.log("final")
    }

    
    
    return(
    <FavoritesContext.Provider value={{
        photoList,
        addPhoto: addPhoto,
        
      }}>
{children}
    </FavoritesContext.Provider>
    )
}