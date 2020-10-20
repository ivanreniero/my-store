import React from 'react';
import Container from '@material-ui/core/Container';
import ProductList from './Products/ProductList';

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Container maxWidth="lg">
                    <h1>{this.props.greetings}</h1>   
                    <ProductList />
                </Container>
              
            </div>
        )
    }
}

