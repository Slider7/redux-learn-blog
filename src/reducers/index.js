import { combineReducers } from 'redux';
import postReducer from './postsReducer';

export default combineReducers({
  posts: postReducer
});

//export default combineReducers({}); - этого достаточно для запуска аппликации, но будет ошибка в консоли
//добавим заглушку-ключ, например combineReducers({dummy: () => 10})
