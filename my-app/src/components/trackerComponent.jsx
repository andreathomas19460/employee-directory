import React, { Component } from "react";
import Header from "./header";
import Search from "./search";
import Results from "./resultsList";
import axios from "axios";

class Tracker extends Component {
  state = { 
    persons: [],
    searchedPersons: []
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=10").then(({ data }) => {
      const persons = data.results;
      this.setState({ persons: persons, searchedPersons: persons });
    });
  }

  handleInputChange = event => {
  
    const searchValue = event.target.value;

    const searchedPersons = this.state.persons.filter(person => {
      let name = person.name.first.toLowerCase();
      const correctPersons = name.indexOf(searchValue.toLowerCase());
  
  
      return correctPersons;
    })
  
  //updates search input state
    this.setState({
      searchedPersons: searchedPersons
    });
  };

  render() {
    return (
      <div>
        <Header /> <Search handleInputChange={this.handleInputChange} />
        <Results persons={this.state.searchedPersons} /> 
      </div>
    );
  }
}

export default Tracker;