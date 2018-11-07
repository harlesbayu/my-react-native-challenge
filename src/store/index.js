import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import ListNews from '../reducers/listNews'

const reducers = combineReducers({
  ListNews
})

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

export default store