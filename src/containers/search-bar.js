import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState( { searchTerm: event.target.value } );
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.searchTerm);
    this.setState( { searchTerm: ''} );
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="Enter a city to find out its weather" 
          onChange={this.onInputChange}
          value={this.state.searchTerm}
          className="form-control"
        />
        <span className="input-group-btn" >
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    ); }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather: fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

