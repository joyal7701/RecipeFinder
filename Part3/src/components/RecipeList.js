import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeItem from "./RecipeItem";
import { Link } from "react-router-dom";
class RecipesList extends Component {
  render() {
    return (
      <div>
        <h4 className="link">
          <Link to="/favourites">Favourites</Link>
        </h4>
        {this.props.recipes.map((recipe, index) => {
          return (
            <RecipeItem key={index} recipe={recipe} favouriteButton={true} />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(RecipesList);
