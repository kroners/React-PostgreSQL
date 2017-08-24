import React, { Component } from 'react';
import CountryForm from './CountryForm';
import CountriesTable from './CountriesTable';
import SearchBar from './SearchBar';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      title: 'Simple Country App',
      countries: []
    }
    this.addCountry = this.addCountry.bind(this);
  }

  componentDidMount() {
    console.log('COMPONENT HAS MOUNTED');
    const url = 'http://localhost:3000/api/countries';
    fetch(url)
      .then((response) =>{
        console.log(response);
        return response.json();
      })
      .then(responseJson => {
        console.log(responseJson);
        let countries = this.state.countries;
        countries.concat(responseJson);
        this.setState({countries:responseJson});
        console.log(this.state.countries);
      })
      .catch(function(err) {
        console.log(err);
      })
  }

  componentDidUpdate() {
    console.log(this.state.countries);
      console.log(this.state);
      console.log(this.props);
  }

  componentWillMount() {
    console.log(this.state);
    console.log(this.props);
  }

  addCountry(data) {
    // event.preventDefault();
    console.log('addCountry method');
    console.log(data);
    let newData = {
      country_name: data.name,
      continent_name: data.continent,
      id: Math.round(Math.random().toFixed(3)*100)
    };
    console.log(newData);
    var request = new Request('http://localhost:3000/api/new-country', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json',
        'Accept': 'application/json'}),
      body: JSON.stringify(newData)
    });

    fetch(request)
      .then((response) =>{
        console.log(response);
        return response.json();
      })
      .then(responseJson => {
        console.log(responseJson);
        let countries = this.state.countries;
        countries.push(newData);
        this.setState({
          countries: countries
        });
        console.log(this.state.countries);
      })
      .catch(function(err) {
        console.log(err);
      })
  }

  render() {
    let title = this.state.title;

    return (
      <div className="App">
        <div className="App-header">
          <h2>{title}</h2>
        </div>
        <SearchBar/>
        <CountryForm onChange={this.addCountry}/>
        <CountriesTable countries={this.state.countries}/>
      </div>
    );
  }
}

export default App;
