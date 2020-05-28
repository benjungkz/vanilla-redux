import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function ToDo({ text, onBtnClick, id }){
    
    return(
        <li>
            <Link to={`/${id}`}>
                {text} <button onClick= { onBtnClick }>DEL</button>
            </Link>
        </li>
    );
}

// Mapping dispatch
function mapDispatchToProps( dispatch, ownProps ){
    return {
        onBtnClick : () => dispatch(actionCreators.deleteToDo(ownProps.id))
    };

}

// // Mapping State
// function mapStateToProps( state ){
//     return {
//         toDos : state
//     }
// }

// Connect
export default connect( null, mapDispatchToProps) (ToDo);