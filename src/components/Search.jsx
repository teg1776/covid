import React from "react";

function Search(props) {
  const { handleSearch, updateQuery } = props;
  return (
    <form onSubmit={handleSearch}>
      <label htmlFor="search">Search by Country</label>
      <br />
      <input type="text" onChange={(e) => updateQuery(e.target.value)} />
      <input type="submit" />
    </form>
  );
}

export default Search;
