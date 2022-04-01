import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"

export const PhotoContext = createContext();

export const PhotosContextProvider = ({ children }) => {
  const [photoList, setPhotoList] = useState([]);

  const savePhotoList = async () => {
    try {  
      await AsyncStorage.setItem(
        'photoList',  
        JSON.stringify(photoList)
      );
    } catch (e) {
      console.log(e);
    }
  };
  const loadPhotoList = async () => {
    try {
      const history = await AsyncStorage.getItem('photoList');

      if (history && JSON.parse(history).length) {
        setPhotoList(JSON.parse(history));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadPhotoList();
  }, []);

  useEffect(() => {
    savePhotoList();
  }, [photoList]);


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