import React, {Component} from 'react';

class CountryRow extends Component {
  constructor() {
    super()
  }
  render() {
    const {country} = this.props;

    return(
        <tr>
          <td>{country.id}</td>
          <td>{country.country_name}</td>
          <td>{country.continent_name}</td>
          <td>
            <button>Edit</button>
            {' '} <button>Delete</button>
          </td>
        </tr>
    );
  }
}

export default CountryRow;
