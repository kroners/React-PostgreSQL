import React, {Component} from 'react';

class CountryForm extends Component {

  constructor(props) {
    super(props);
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
    this.refs.name.value = '';
    this.refs.continent.value = '';
  }

  render() {
    const {value_name, value_continent} = this.props;

    return (
      <div className="input-container">
        <form onSubmit={this.handleAddCountry}>
          <input className='form-control' ref="name" type="text" placeholder="country name" onChange={e => this.setState({name: e.target.value})}/>
          <input className='form-control' ref="continent" type="text" placeholder="continent name"  onChange={e => this.setState({continent: e.target.value})}/>
          <button className='btn btn-primary'>Add Country</button>
        </form>
      </div>
    )
  }
}

export default CountryForm;
