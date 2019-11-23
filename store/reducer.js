/*
 * @Date: 2019-11-23 01:01:37
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-23 01:12:00
 * @content: I
 */
export default numberReduce = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'add':
      return {...state, count: state.count + 1};
    case 'reduce':
      return {...state, count: state.count - 1};
    case 'init':
      return {...state, count: action.count};
    default:
      return state;
  }
};
