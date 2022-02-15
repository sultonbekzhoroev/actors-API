import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { UncontrolledCarousel } from "reactstrap";
import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      actors: [],
    };
  }

  componentDidMount() {
    const URL =
      "https://api.themoviedb.org/3/person/popular?api_key=99b7e54dffb135e088fc5567896050e7&language=en";
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => this.setState({ actors: data.results }))
      .catch((err) => console.log(err));
  }

  render() {
    return <></>;
  }
}

export default App;
