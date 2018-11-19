import { SAVE_COMMENT } from 'actions/types';
import { FETCH_COMMENTS } from 'actions/types';
import axios from 'axios';

export const saveComment = comment => ({
  type: SAVE_COMMENT,
  payload: comment,
});

export const fetchComments = () => {
  const response = axios.get('http://jsonplaceholder.typicode.com/comments');
  return {
    type: FETCH_COMMENTS,
    payload: response,
  }
};
