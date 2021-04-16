import { combineReducers } from "redux";
import { SET_RECIPES, FAVOURITE_RECIPE } from "../actions";

export const recipes = (state = [], action) => {
  switch (action.type) {
    case SET_RECIPES:
      return action.items;
    default:
      return state;
  }
};

export const favouriteRecipes = (state = [], action) => {
  switch (action.type) {
    case FAVOURITE_RECIPE:
      return (state = [...state, action.recipe]);
    default:
      return state;
  }
};

const rootReducer = combineReducers({ recipes, favouriteRecipes });

export default rootReducer;
