import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { remove } from "../store";

function ToDo({ text, onBtnClick, id }){
    
    return(
        <li>
            <Link to={`/${id}`}> {text} </Link>
            <button onClick= { onBtnClick }>DEL</button>
        </li>
    );
}

// Mapping dispatch
function mapDispatchToProps( dispatch, ownProps ){
    return {
        onBtnClick : () => dispatch(remove(parseInt(ownProps.id)))
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