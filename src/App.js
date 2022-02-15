import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { UncontrolledCarousel } from "reactstrap";
import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      actors: [],
      imgURL: "https://image.tmdb.org/t/p/w500/",
    };
  }

  async componentDidMount() {
    const URL =
      "https://api.themoviedb.org/3/person/popular?api_key=99b7e54dffb135e088fc5567896050e7&language=en";
    fetch(URL);
    try {
      const resp = await fetch(URL);
      const data = await resp.json();
      this.setState({ actors: data.results });
    } catch (err) {
      console.log("error");
    }

    // .then((resp) => resp.json())
    // .then((data) => this.setState({ actors: data.results }))
    // .catch((err) => console.log(err));
  }

  render() {
    const { actors } = this.state;
    return (
      <>
        <div className="app">
          <div className="movies">
            {actors.map((actor) => {
              const { name, profile_path, known_for } = actor;
              return (
                <div className="actor">
                  <figure>
                    <img
                      src={"https://image.tmdb.org/t/p/w500/" + profile_path}
                      className="actor-img"
                    ></img>
                  </figure>
                  <h1>{name}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default App;
