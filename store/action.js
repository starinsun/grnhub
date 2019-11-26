/*
 * @Date: 2019-11-25 19:00:43
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-25 23:14:04
 * @content: I
 */
import {GET_SEARCH_DATA} from './dispatch';
import axios from 'axios';

export const getSearchDataByThunk = value => {
  return async dispatch => {
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=${value}&page=1&per_page=20`,
    );
    const action = {
      type: GET_SEARCH_DATA,
      value: res.data.items,
    };
    dispatch(action);
  };
};
