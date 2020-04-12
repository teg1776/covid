import React, { Component } from "react";
import Search from "./components/Search.jsx";
import "./App.css";

class App extends Component {
  state = {
    query: "",
  };
  handleSearch = (e) => {
    e.preventDefault();
  };
  updateQuery = (query) => {
    this.setState({ query });
  };
  render() {
    return (
      <div className="App">
        <h1>Covid Proj</h1>
        <Search
          handleSearch={this.handleSearch}
          updateQuery={this.updateQuery}
        />
      </div>
    );
  }
}

export default App;
