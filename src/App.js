import React, { Component } from "react";
import Search from "./components/Search.jsx";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    query: "",
  };
  handleQuery = (e) => {
    console.log(this.state.query);
    const params = { name: this.state.query };
    const headers = {
      "X-RapidAPI-Host": "covid-19-data.p.rapidapi.com",
      "x-rapidapi-key": "31e4084d72msh74ffa8bb2c6f526p1800f4jsn76a2ce9f6d36",
    };
    axios
      .get("https://covid-19-data.p.rapidapi.com/country?", {
        headers,
        params,
      })
      .then((res) => {
        console.log(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });

    e.preventDefault();
  };
  updateQuery = (query) => {
    this.setState({ query });
  };
  render() {
    return (
      <div className="App">
        <h1>Covid Project</h1>
        <Search handleQuery={this.handleQuery} updateQuery={this.updateQuery} />
        <h3>Table style with percentage changes per day</h3>
        <h2>Covid-19 Real-time Data by Country</h2>
        <h2>Covid-19 Real-time Data by State (USA)</h2>
        <h3>Updated every 15 minutes</h3>
      </div>
    );
  }
}

export default App;
