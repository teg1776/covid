import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Search from "./Search.jsx";
import axios from "axios";

function SingleCountry(props) {
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
        if (data.length === 0) {
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
    console.log(data);
    setQuery(query);
  };

  return (
    <div className="main">
      {data.length > 0 ? (
        <div>
          <Search handleQuery={handleQuery} updateQuery={updateQuery} />
          <Table hover bordered variant="dark">
            <thead>
              <tr>
                <th>Country</th>
                <th className="confirmed">Confirmed</th>
                <th className="recovered">Recovered</th>
                <th className="critical">Critical</th>
                <th className="deaths">Deaths</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data[0].country}</td>
                <td className="confirmed">{data[0].confirmed}</td>
                <td className="recovered">{data[0].recovered}</td>
                <td className="critical">{data[0].critical}</td>
                <td className="deaths">{data[0].deaths}</td>
              </tr>
            </tbody>
            <tbody></tbody>
          </Table>
        </div>
      ) : (
        <Search handleQuery={handleQuery} updateQuery={updateQuery} />
      )}
    </div>
  );
}
export default SingleCountry;
