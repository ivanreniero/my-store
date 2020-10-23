import React from 'react';
import Container from '@material-ui/core/Container';
import ProductList from './ProductList';
import {useParams} from 'react-router-dom';

function Products() {
    const { categoryId } = useParams();
    let title = ''
    switch (categoryId) {
        case 'pizza':
            title = 'Pizzas';
            break;
        case 'hamburguesa':
            title = 'Hamburguesas';
            break;
        case 'guarnicion':
            title = 'Guarniciones';
            break;
        default:
            title = 'Productos';
      }
    return (
        <div>
            <Container maxWidth="lg">
                <h1>{title}</h1>
                <ProductList categoryId={categoryId}/>
            </Container>
        </div>
    )
}

export default Products