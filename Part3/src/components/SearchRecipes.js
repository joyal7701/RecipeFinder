import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from "react-bootstrap";
import { connect } from "react-redux";
import { setRecipes } from "../actions/index";

class SearchRecipes extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: "",
      dish: "",
    };
  }

  search() {
    let { ingredients, dish } = this.state;

    const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => this.props.setRecipes(json.results));
  }

  render() {
    return (
      <Form inline>
        <FormGroup>
          <FormLabel>Ingredients</FormLabel>{" "}
          <FormControl
            type="text"
            placeholder="Cheese,Thin Crust"
            onChange={(event) =>
              this.setState({ ingredients: event.target.value })
            }
          ></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel>Dish</FormLabel>{" "}
          <FormControl
            onChange={(event) => this.setState({ dish: event.target.value })}
            type="text"
            placeholder="Pizza"
          />
        </FormGroup>
        <Button onClick={() => this.search()}>Submit</Button>
      </Form>
    );
  }
}

export default connect(null, { setRecipes })(SearchRecipes);
