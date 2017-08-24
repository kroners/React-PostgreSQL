import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

  }

  handleFilterCountriesChange(e) {
    this.props.onFilterSearchInput(e.target.value);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextInputChange}
        />
      </form>
    );
  }
}

export default SearchBar;
