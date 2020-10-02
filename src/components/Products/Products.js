import React from 'react';
import Container from '@material-ui/core/Container';
import ProductList from './ProductList';


class Products extends React.Component  {
    render(){
        return (
            <div>
                <Container maxWidth="lg">
                    <h1>Products</h1>
                    <ProductList />
                </Container>
            </div>
        )
    }        
}

export default Products;