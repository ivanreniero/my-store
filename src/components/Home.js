import React from 'react';

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.greetings}</h1>    
            </div>
        )
    }
}

