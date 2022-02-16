import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { UncontrolledCarousel } from "reactstrap";
import "./App.css";
import ModalPage from "./ModalPage";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      actors: [],
      imgURL: "https://image.tmdb.org/t/p/w500/",
      isTheModalOn: false,
      selectedActors: [],
    };
    this.handleModal = this.handleModal.bind(this);
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

  toggleModal(id) {
    this.setState({
      isTheModalOn: true,
    });
    const selectedActors = this.state.actors.filter((actor) => actor.id === id);
    this.setState({ selectedActors });
  }

  handleModal(status) {
    this.setState({ isTheModalOn: status });
  }

  render() {
    const { actors } = this.state;
    return (
      <>
        <div className="app">
          <div className="movies">
            {actors.map((actor) => {
              const { name, profile_path, known_for, id } = actor;
              const details = known_for.map((movie) => movie.title);
              return (
                <div className="actor" onClick={() => this.toggleModal(id)}>
                  <figure>
                    <img
                      src={"https://image.tmdb.org/t/p/w500/" + profile_path}
                      className="actor-img"
                    ></img>
                  </figure>
                  <h1>{name}</h1>
                  <p>{details.join(",")}</p>
                </div>
              );
            })}
          </div>
          {this.state.isTheModalOn ? (
            <ModalPage
              handleModal={this.handleModal}
              data={this.state.selectedActors}
            />
          ) : null}
        </div>
      </>
    );
  }
}

export default App;
