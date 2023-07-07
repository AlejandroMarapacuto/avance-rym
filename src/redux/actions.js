export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const ALL_FAVORITES = "ALL_FAVORITES";

export const addFav = (
  key,
  id,
  name,
  gender,
  species,
  image,
  onClose,
  status,
  origin
) => {
  return {
    type: ADD_FAV,
    payload: {
      key: key,
      id: id,
      name: name,
      gender: gender,
      species: species,
      image: image,
      onClose: onClose,
      status: status,
      origin: origin,
    },
  };
};

export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

export const allFavorites = () => {
  return {
    type: ALL_FAVORITES,
  };
};
