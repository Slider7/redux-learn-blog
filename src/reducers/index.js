import { combineReducers } from 'redux';

export default combineReducers({
  replaceMe: () => 'OK'
});

//export default combineReducers({}); - этого достаточно для запуска аппликации, но будет ошибка в консоли
//добавим заглушку-ключ, например combineReducers({dummy: () => 10})
