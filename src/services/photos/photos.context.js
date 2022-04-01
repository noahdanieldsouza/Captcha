import React, { createContext, useState } from "react";

export const PhotoContext = createContext();

export const PhotosContextProvider = ({ children }) => {
  const [photoList, setPhotoList] = useState([]);

  const add = (photo) => {
    setPhotoList([...photoList, photo]);
  };

  const remove = (photo) => {
    const newPhotos = photoList.filter(
      (x) => x.name !== photo.placeId
    );

    setPhotoList(newPhotos);
  };
  return (
    <PhotoContext.Provider
      value={{
        photoList,
        addToPhotos: add,
        removeFromPhotos: remove,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};