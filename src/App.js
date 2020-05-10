import React, { Component } from "react";
import Search from "./components/Search.jsx";
import SingleCountry from "./components/SingleCountry.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import axios from "axios";

class App extends Component {
  state = {
    query: "",
    data: [],
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
        let newData;
        if (this.state.data.length == 0) {
          newData = [res.data[0]];
          this.setState({ data: newData });
        } else {
          let newData = [...this.state.data];
          newData.push(res.data[0]);
          this.setState({ data: newData });
        }
        console.log(this.state.data);
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
        {this.state.data.length != 0 ? (
          <SingleCountry data={this.state.data[this.state.data.length - 1]} />
        ) : (
          <h2>Waiting for search..</h2>
        )}
      </div>
    );
  }
}

export default App;
