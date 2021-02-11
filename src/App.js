import React, { Component } from "react";
import CardList from "./components/CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
// import { robots } from "./Data/robots";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };

    console.log("React lify cycle methods");
    console.log("Constructor");
  }

  componentWillMount() {
    //  fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((users) => {
    //     this.setState({ robots: users });
    //   });
    console.log("componentWillMount");
  }

  componentDidMount() {
    // this.setState({robots:robots})
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
    console.log("componentDidMount");
  }
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };
  // function App() {
  render() {
    console.log("render");
    const filterdRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    // console.log(filterdRobots);
    if (this.state.robots.length === 0) {
      return <h1> Loading ....</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Robot Friends</h1>

          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filterdRobots} />;
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
