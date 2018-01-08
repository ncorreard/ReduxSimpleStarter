import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { fetchSinglePost , deleteSinglePost } from '../actions';
import { Link } from 'react-router-dom';

class PostShow extends Component {

  componentDidMount() { 
    const { id } = this.props.match.params;
    this.props.fetchSinglePost(id);
  }

  onDeleteClick() {
    this.props.deleteSinglePost(this.props.match.params.id,() => this.props.history.push('/'));
  }


  render() { 
    const { post } = this.props;
    if (!post) { return <div>loading</div>; }
    return (
      <div>
        <Link to="/">Back to index</Link>
        <button className="btn 
          btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)} >
           Delete post</button>
        <div>
          <h3>{post.title}</h3>
          <h6>{post.categories}</h6>
          <p>{post.content}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps( { posts }, ownProps ) {
  return { post: posts[ownProps.match.params.id] }; 
};

export default connect(mapStateToProps, {fetchSinglePost, deleteSinglePost})(PostShow);

