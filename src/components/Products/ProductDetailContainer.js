import React, {useState, useEffect} from 'react';
import ProductsAPI from '../../api/ProductsAPI';
import ProductDetail from './ProductDetail';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../firebase/index';

function ProductDetailContainer() {
    const { productId } = useParams();
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore();
        const productsCollection = db.collection("products");
        const product = productsCollection.doc(productId);

        product.get().then((doc) => {
            setProduct({id:doc.id, ...doc.data()});  
        }).catch((error) => {
            alert("Error loading products");
        }).finally(() => {
            setLoading(false);
        });;
    }, [productId])

    return (
        <div>
            <ProductDetail loading={loading} product={product}/>
        </div>
    )
    

}

export default ProductDetailContainer
