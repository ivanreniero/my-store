import React from 'react';
import Container from '@material-ui/core/Container';
import ProductList from './ProductList';
import {useParams} from 'react-router-dom';

function Products() {
    const { categoryId } = useParams();
    return (
        <div>
            <Container maxWidth="lg">
                <h1>Products</h1>
                <ProductList categoryId={categoryId}/>
            </Container>
        </div>
    )
}

export default Products