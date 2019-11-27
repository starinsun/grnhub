/*
 * @Date: 2019-11-23 01:01:37
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-27 22:08:57
 * @content: I
 */
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {GET_SEARCH_DATA, GET_TREND_DATA} from './dispatch';

const numberReduce = (
  state = {
    searchData: [],
    trendData: [],
    typeData: [],
  },
  action,
) => {
  switch (action.type) {
    case GET_SEARCH_DATA:
      data = JSON.parse(JSON.stringify(state));
      data.searchData = action.value;
      return data;
    case GET_TREND_DATA:
      data = JSON.parse(JSON.stringify(state));
      data.trendData = action.value;
      return data;
    default:
      return state;
  }
};

const store = createStore(numberReduce, applyMiddleware(thunk));
export default store;
