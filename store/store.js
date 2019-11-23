/*
 * @Date: 2019-11-23 00:33:14
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-23 01:08:20
 * @content: I
 */
import {createStore} from 'redux';
import numberReduce from './reducer';

const store = createStore(numberReduce);

export default store;
