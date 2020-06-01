import { createStore } from 'redux'; 
import { createAction, createReducer, configureStore, createSlice } from '@reduxjs/toolkit';

// // Action Creator ( Toolkit )
// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// // Reducer ( original )
// const reducer = ( state = [], action ) => {
//     switch(action.type){
//         case addToDo.type:
//             return[{ text: action.payload, id: Date.now() }, ...state];
//         case deleteToDo.type:
//             return state.filter(toDo => toDo.id !== action.payload);
//         default:
//             return state;
//     }
// }

// // Reducer ( Toolkit )
// const reducer = createReducer( [], {
//     [addToDo] : ( state, action ) => {
//         // Mutating the state is possible!
//         state.push( { text: action.payload, id: Date.now() } );
//     },
//     [deleteToDo] : ( state, action ) => 
//         state.filter(toDo => toDo.id !== action.payload)
    
// });

// Slide ( Toolkit )
const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    reducers:{
        add: ( state, action ) => { 
            state.push( { text: action.payload, id: Date.now()});
        },
        remove: ( state, action ) => state.filter(toDo => toDo.id !== action.payload)
    }
});

// Store ( Toolkit )
const store = configureStore({ reducer: toDos.reducer });


// Export
export const  { add, remove } = toDos.actions;

export default store;