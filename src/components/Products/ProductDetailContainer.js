import React, {useState, useEffect} from 'react';
import ProductsAPI from '../../api/ProductsAPI';
import ProductDetail from './ProductDetail';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../firebase/index';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

function ProductDetailContainer() {
    const { productId } = useParams();
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const db = getFirestore();
        const productsCollection = db.collection("products");
        const product = productsCollection.doc(productId);

        product.get().then((doc) => {
            if (doc.data()){
                setProduct({id:doc.id, ...doc.data()});  
            } else {
                setError(true);
            }
        }).catch((error) => {
            alert("Error loading products");
        }).finally(() => {
            setLoading(false);
        });;
    }, [productId])

    if (error) {
        return (
            <div>
                <Alert severity="error">El producto seleccionado no existe!</Alert>
            </div>
        )      
    } else {
        return (
            <div>
                <ProductDetail loading={loading} product={product}/>
            </div>
        )
    }
}

export default ProductDetailContainer
