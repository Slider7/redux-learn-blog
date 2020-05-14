import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});

//export default combineReducers({}); - этого достаточно для запуска аппликации, но будет ошибка в консоли
//добавим заглушку-ключ, например combineReducers({dummy: () => 10})
