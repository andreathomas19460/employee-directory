import React from "react";
import "../styles/search.css";


function Search(handleInputChange) {
  return (
      <div className="search-bar">
      <label className="dob-label" htmlFor="dob">
          DOB
        </label>
        <form>
          <input
          type="date"
          id="dob"
          onChange={handleInputChange}
          name="dob">
        </input>
        <input type="date" id="enddate" name="enddate"></input>
        <input
          name="search"
          type="text"
          className="form-control"
          placeholder="Search"
          id="search"
          onChange={handleInputChange}>
        </input>
        </form>
      </div>
   
  );
}


export default Search;