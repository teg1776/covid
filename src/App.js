import React, { Component, useState, useEffect } from "react";
import Search from "./components/Search.jsx";
import SingleCountry from "./components/SingleCountry.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const handleQuery = (e) => {
    const params = { name: query };
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
        if (data.length == 0) {
          newData = [res.data[0]];
          setData(newData);
        } else {
          let newData = [...data];
          newData.unshift(res.data[0]);
          setData(newData);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    e.preventDefault();
  };

  const updateQuery = (query) => {
    setQuery(query);
  };

  return (
    <div className="App">
      <h1>Covid Project</h1>
      <Search handleQuery={handleQuery} updateQuery={updateQuery} />
      {data.length != 0 ? <SingleCountry data={data[0]} /> : null}
    </div>
  );
}

export default App;
