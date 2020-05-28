import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import Todo from "../components/Todo";

function Home({ toDos, addTodo }){
    
    //?
    const [ text, setText ] = useState("");

    function onChange(e){
        setText(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();
        addTodo(text);
        setText("");
    }

    return (
        <div>
            <h1>To Do List</h1>
            <form onSubmit= { onSubmit }>
                <input type="text" value={ text } onChange={ onChange } />
                <button>ADD</button>
            </form>
          
            <ul>
            {toDos.map(toDo => (
                <Todo {...toDo } key={toDo.id} /> 
            ))}
            </ul>
        </div>
    );
}

// Map State to Props
function mapStateToProps( state ){

   return { toDos: state };

}

// Map Dispatch to Props
function mapDispatchToProps( dispatch ){
    return {
        addTodo: (text) => dispatch(actionCreators.addToDo(text)),
    }
}

// Connect
export default connect(mapStateToProps, mapDispatchToProps) (Home);