import { createStore } from 'redux';

// Event
const ADD = "ADD";
const DEL = "DELETE";

// Action Creator
const addToDo = text =>{
    return{
        type: ADD,
        text
    }
}

const deleteToDo = id =>{
    return{
        type: DEL,
        id: parseInt(id)
    }
}


// Reducer
const reducer = ( state = [], action ) => {
    switch(action.type){
        case ADD:
            return[{ text: action.text, id: Date.now() }, ...state];
        case DEL:
            return state.filter(toDo => toDo.id !== action.id);
        default:
            return state;
    }
}
// Store
const store = createStore(reducer);

// Export
export const actionCreators = {
    addToDo,
    deleteToDo
}
export default store;