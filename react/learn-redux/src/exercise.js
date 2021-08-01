import { createStore } from "redux";

const initialState = {
  counter: 0,
  text: "",
  list: [],
};

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

function increase() {
  return {
    type: INCREASE,
  };
}

const decrease = () => ({
  type: DECREASE,
});

const changeText = (text) => ({
  type: CHANGE_TEXT,
  text,
});
const addTodoList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };

    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };

    default:
      return state;
  }
}

const store = createStore(reducer);

console.log(store.getState());

//스토어 안에 들어있는 상태가 바뀔 떄 마다 호출되는 listener 함수
const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("안녕"));
store.dispatch(addTodoList({ id: 1, text: "와우" }));
