import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";

// Action Creator
const addToDo = text => {
  return {
    type: ADD_TODO,
    text
  }
}

const DeleteToDo = id => {
  return{
    type: DEL_TODO,
    id
  }
}

// Reducer
const reducer = (state = [] , action) => {
  switch(action.type){
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }];
    case DEL_TODO:
      return state.filter(toDo => toDo.id !== action.id );
    default:
      return state;
  }
};

// Store
const store = createStore(reducer);

// Dispatch
const dispatchToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = e => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(DeleteToDo(id));
}


// Render
const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = '';
  toDos.forEach( todo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo );
    
    li.id = todo.id;
    li.innerText = todo.text;
    
    li.appendChild(btn);
    ul.appendChild(li);
    
  });
};

// Subsribe
store.subscribe(paintToDos);


// Handler
const onSubmit = e =>{
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchToDo(toDo);
};

form.addEventListener("submit", onSubmit);
