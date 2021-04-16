export const SET_RECIPES = "SET_RECIPES";
export const setRecipes = (items) => {
  return {
    type: SET_RECIPES,
    items,
  };
};

export const FAVOURITE_RECIPE = "FAVORITE_RECIPE";
export const favouriteRecipes = (recipe) => {
  return {
    type: FAVOURITE_RECIPE,
    recipe,
  };
};
