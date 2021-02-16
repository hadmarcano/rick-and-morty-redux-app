export const setFavorite = (payload) => ({
  Type: "SET_FAVORITE",
  payload,
});

export const deleteFavorite = (payload) => ({
  type: "DELETE_FAVORITE",
  payload,
});

export const setSection = (payload) => ({
  type: "SET_SECTION",
  payload,
});
