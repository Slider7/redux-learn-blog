import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonplaceholder';

/*
export const fetchPosts = async () => {
  const responce = await jsonPlaceholder.get('/posts');
  return {
    type: 'FETCH_POSTS',
    payload: responce
  };
}; 
//Будет Error: Actions must be plain objects. Use custom middleware for async actions.
*/

export const fetchPosts = () => async dispatch => {
  const responce = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: responce.data });
};

/* lodash-memoize версия fetchUser
export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const responce = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: responce.data });
}); */

export const fetchUser = id => async dispatch => {
  const responce = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: responce.data });
};

export const fetchPostAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};
