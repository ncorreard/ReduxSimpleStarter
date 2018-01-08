import { FETCH_POSTS, FETCH_SINGLE_POST , DELETE_SINGLE_POST } from '../actions';
import _ from 'lodash';

export default function(state={}, action) {
  switch(action.type) {
    case DELETE_SINGLE_POST:
      return _.omit(state,action.payload);
      
    case FETCH_SINGLE_POST:
      // const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id]=post;
      // return newState;
      console.log(action.payload.data);
      console.log({ ...state, [action.payload.data.id]:action.payload.data });
      return { ...state, [action.payload.data.id]:action.payload.data }; 
    case FETCH_POSTS: 
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
