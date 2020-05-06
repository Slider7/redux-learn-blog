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
  dispatch({ type: 'FETCH_POSTS', payload: responce });
};
