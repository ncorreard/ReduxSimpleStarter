import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const KEY = '?key=nic0';
const FETCH_URL = `${ROOT_URL}/posts`; 

export const FETCH_POSTS='FETCH_POSTS';
export const POST_POSTS='POST_POSTS';
export const FETCH_SINGLE_POST='FETCH_SINGLE_POST';
export const DELETE_SINGLE_POST='DELETE_SINGLE_POST';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function postPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${KEY}`, values)
    .then( () => callback());
  return {
    type: POST_POSTS,
    payload: request
  }
}

export function fetchSinglePost(id) {
  console.log("fetch post "+id);
  const request = axios.get(`${ROOT_URL}/posts/${id}${KEY}`);
  return {
    type: FETCH_SINGLE_POST,
    payload: request
  };
}

export function deleteSinglePost(id, callback) {
  console.log("callback:",callback);
  const request = axios.delete(`${ROOT_URL}/posts/${id}${KEY}`)
    .then( () => callback() );
  return {
    type: DELETE_SINGLE_POST,
    payload: id
  };
}


