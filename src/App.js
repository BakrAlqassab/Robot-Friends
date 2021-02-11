import React, { Component } from "react";
import CardList from "./components/CardList";
import SearchBox from "./SearchBox";
import { robots } from "./Data/robots";
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: "",
    };
  }
  onSearchChange=(event)=> {
    this.setState({'searchField':event.target.value})
   
  }
  // function App() {
  render() {
     const filterdRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
        console.log(filterdRobots);
    return (
      <div className="tc">
        <h1 className='f1'>Robot Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filterdRobots} />;
      </div>
    );
  }
}

export default App;
