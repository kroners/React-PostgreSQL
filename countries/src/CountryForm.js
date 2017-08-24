import React, {Component} from 'react';

class CountryForm extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      continent: ''
    }
    this.handleAddCountry = this.handleAddCountry.bind(this);
  }

  componentWillMount() {
    console.log("Mounting  Component");
    console.log(this.state);
    console.log(this.props);
  }

  componentDidMount() {
    console.log("Component Mounted");
  }

  componentDidUpdate() {
    console.log("Component did update");
    console.log(this.state);
    console.log(this.props);
  }

  handleAddCountry(e) {
    e.preventDefault();
    this.props.onChange(this.state);
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="country name" onChange={e => this.setState({name: e.target.value})}/>
        <input type="text" placeholder="continent name" onChange={e => this.setState({continent: e.target.value})}/>
        <button onClick={this.handleAddCountry}>Add Country</button>
      </form>
    )
  }
}

export default CountryForm;
