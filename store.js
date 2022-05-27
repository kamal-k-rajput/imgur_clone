//action is a object contain type and payload
// reducer is a function that accepet store and action.
//dispatch is a function provider by react.
import { legacy_createStore as createStore } from "redux";
const reducer = (store, action) => {
  switch (action.type) {
    case "ADD_COUNT":
      return { ...store, count: store.count + action.payload };
    case "ADD_TODO":
      return { ...store, todos: [...store.todos, action.payload] };
    default:
      return { ...store };
  }
};
const initialState = { count: 0, todos: [] };
const store = createStore(reducer, initialState);

const action = {
  type: "ADD_COUNT",
  payload: 1,
};
console.log(store.getState());
store.dispatch(action);
console.log(store.getState());

store.dispatch({
  type: "ADD_TODO",
  payload: "learn redux",
});

console.log(store.getState());
