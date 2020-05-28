import React from "react";
// import { useParams } from "react-router-dom";
import { connect } from "react-redux";

// EL
function Detail({ toDo }){
    // React Hooks
    // const id = useParams();
    

    return (
        <>
           <h1>{toDo?.text}</h1>
           <h5>Created at: {toDo?.id}</h5>
        </>
    );
}

// Mapping Props
function mapStateToProps( state, ownProps ){
    // Find the key with specific element's props
    const {
        match: {
            params: { id }
        }
    } = ownProps;

    console.log(id);

    // Find the data object that has the key's value
    return { toDo : state.find(toDo => toDo.id === parseInt(id) ) }; 
}

// Export
export default connect( mapStateToProps, null) (Detail);