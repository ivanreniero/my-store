import React, {useState, useEffect} from 'react';
import ProductsAPI from '../../api/ProductsAPI';
import ProductDetail from './ProductDetail';
import {useParams} from 'react-router-dom';

function ProductDetailContainer() {
    const { productId } = useParams();
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        ProductsAPI.getProduct(productId).then(
            (product) => {
                setProduct(product);
                setLoading(false);
              },
              (error) => {
                alert("Error loading product")
              }
        );  
    }, [productId])

    return (
        <div>
            <ProductDetail loading={loading} product={product}/>
        </div>
    )
    

}

export default ProductDetailContainer
