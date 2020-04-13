import React from "react";
import "../styles/resultsList.css";


function Results({ persons }) {
  return (

    <div className="container">
      {" "}
      <div className="results-table">
        <table className="table table-sortable table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th class="asc" className="table-sortable" scope="col">Name</th>
              <th scope="col">Phone</th>
              <th class="asc" scope="col">Email</th>
              <th class="asc" scope="col">DOB</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person, index) => (
              <tr key={index}>
                <td>
                <img src={person.picture.medium} alt="person-photo" />{" "}
                </td>
                <td>{person.name.first}</td>
                <td>{person.phone}</td>
                <td>{person.email}</td>
                <td>{person.dob.date.slice(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {}
    </div>
  );
}


export default Results;