import React, { useState } from "react";
import { Table } from "react-bootstrap";

function SingleCountry(props) {
  const { country, confirmed, recovered, critical, deaths } = props.data;
  console.log(props);
  return (
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
          <td>{country}</td>
          <td className="confirmed">{confirmed}</td>
          <td className="recovered">{recovered}</td>
          <td className="critical">{critical}</td>
          <td className="deaths">{deaths}</td>
        </tr>
      </tbody>
      <tbody></tbody>
    </Table>
  );
}
export default SingleCountry;
