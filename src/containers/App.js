import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../Scroll/Scroll";
// import { robots } from "./Data/robots";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentWillMount() {}

  componentDidMount() {
    // this.setState({robots:robots})
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };
  // function App() {
  render() {
    const{robots,searchField} = this.state;
    const filterdRobots = robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });

    if (!robots.length) {
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
