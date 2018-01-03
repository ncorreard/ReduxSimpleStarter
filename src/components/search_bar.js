import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: 'Alexandre Dumas'};
  }

  render() {
    return (
      <div className="search-bar">
        <input 
           value={this.state.term}
           onChange={event => this.onInputChange(event.target.value)} />
      </div>);
  }

  onInputChange(term) {
    console.log(term);
    this.setState( {term} );
    this.props.onSearch ( term );
  }

}

export default SearchBar;
