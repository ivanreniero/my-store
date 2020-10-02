import React from 'react';

function CounterButton(props){
    return(
        <button onClick={props.count}>{props.buttonType}</button>
    )
}

export default CounterButton;