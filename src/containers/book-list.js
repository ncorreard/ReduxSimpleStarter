import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends React.Component {

  renderBookList() {
    return this.props.books.map( (book) => {
        return (
          <li 
             key={book.title}
             onClick={() => this.props.selectBook(book)} >
             {book.title}
          </li> );
    });
  }    

  render() {
    return (
      <ul>
        { this.renderBookList() }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { books: state.books };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook}, dispatch); 
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

