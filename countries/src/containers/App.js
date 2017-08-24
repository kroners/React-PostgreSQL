import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';
import {bindActionCreators} from 'redux';

import Header from '../components/Header';
// import LedDisplay from '../components/LedDisplay';
// import NumberInput from '../components/NumberInput';
import Footer from '../components/Footer';
import CountryForm from '../components/CountryForm';
import CountriesTable from '../components/CountriesTable';
import SearchBar from '../components/SearchBar';
// import logo from '../logo.svg';s
import '../App.css';

// const SweetAlert = require('react-swal');

class CountryListView extends Component {

  constructor (props) {
    super(props);
    console.log(this.props);
    this.handleAddCountry = this.handleAddCountry.bind(this);
  }

  componentDidMount () {
    this.props.actions.getCountries();
  }

  componentWillMount () {
    console.log("Will Mount Component");
    console.log(this.state);
    console.log(this.props);
    this.props.actions.getCountries();
  }

  componentDidUpdate () {
    console.log(this.state);
    console.log(this.props);
  }

  handleAddCountry(country){
    console.log(country);
    let newData = {
      country_name: country.name,
      continent_name: country.continent,
      id: Math.round(Math.random().toFixed(3)*100)
    };
    this.props.actions.addCountry(newData);
    this.props.actions.getCountries();
  }

  render() {
    console.log(this.props);
    const {name,continent,countries} = this.props.countries;

    return (
      <div className="App">
        <Header/>
        {/* <SearchBar/> */}
        <CountryForm onChange={this.handleAddCountry} value_name={name} value_continent={continent}/>
        <CountriesTable countries={countries}/>
        <Footer/>
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state);
  return { countries: state.countries };
}

function matchDispatchToProps(dispatch){
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(mapStateToProps, matchDispatchToProps)(CountryListView);
