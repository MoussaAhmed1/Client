const init = localStorage.getItem('Todos') !== null ? JSON.parse(localStorage.getItem('Todos')) :{todos:[]}
export default function TodosReducer(state=init,action) {
  switch(action.type) {
    case"SET_TODOS":
        return{
            todos:action.payload
        }
    case"ADD_TODO":
    return{
      ...state,
      todos:[...state.todos,action.payload]
    }
    case"DELETE_TODO":
    return {
      ...state,
      todos: state.todos.filter(todo => todo.id !== action.payload.id),
    };

    case"TOGGLE_TODO":
    return{
      ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              completed: !todo.completed
            };
          } else {
            return todo;
          }
        })
    }
    default:
        return state;
  }
}
