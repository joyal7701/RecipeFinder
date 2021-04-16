import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeItem from "./RecipeItem";
import { Link } from "react-router-dom";
class FavouriteRecipeList extends Component {
  render() {
    return (
      <div>
        <h4 classname="link">
          <Link to="/">Home</Link>
        </h4>
        <h4>Favourite Recipes: </h4>
        {this.props.favouriteRecipes.map((recipe, index) => {
          return (
            <RecipeItem key={index} recipe={recipe} favouriteButton={false} />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favouriteRecipes: state.favouriteRecipes,
  };
};

export default connect(mapStateToProps, null)(FavouriteRecipeList);
