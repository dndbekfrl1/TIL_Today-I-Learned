import { atom, selector } from "recoil"
import { todoListState } from "./TodoList";

// Selector: derived state 일부를 나타냄
// derived state는 다른 데이터에 의존하는 동적인 데이터를 만듦

// 모든 atom은 write 가능
export const todoListFilterState = atom({
    key:'todoListFilterState',
    default:'Show All',
})

//selector은 일부만 write 가능
export const filteredTodoListState = selector({
    key:'filteredTodoListState',
    get:({get})=>{
        // 내부적으로 todoListFilterState, todoListState를 추적함 
        // 둘 중 하나라도 변한다면 filteredTodoListState 재실행
        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch(filter){
            case 'Show Completed':
                return list.filter((item)=>item.isComplete);
            case 'Show Uncompleted':
                return list.filter((item)=>!item.isComplete);
            default:
                return list;
        };
    },
});

export const todoListStatsState = selector({
    key: 'todoListStatsState',
    get: ({get}) => {
      const todoList = get(todoListState);
      const totalNum = todoList.length;
      const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
      const totalUncompletedNum = totalNum - totalCompletedNum;
      const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;
  
      return {
        totalNum,
        totalCompletedNum,
        totalUncompletedNum,
        percentCompleted,
      };
    },
  });