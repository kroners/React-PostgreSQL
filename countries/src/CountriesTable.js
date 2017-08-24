import React, {Component} from 'react';
import CountryRow from './CountryRow';

class CountriesTable extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  componentDidMount() {
    console.log('COMPONENT HAS MOUNTED');
      console.log(this.state);
      console.log(this.props);
  }

  componentDidUpdate() {
      console.log(this.state);
      console.log(this.props);
  }

  componentWillMount() {
    console.log(this.state);
    console.log(this.props);
  }

  render() {
    var rows = [];
    console.log(this.props);

    this.props.countries.forEach((country) => {
      rows.push(<CountryRow country={country} key={country.id} />);
    })

    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Country Name</th>
            <th>Continent</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

export default CountriesTable;
