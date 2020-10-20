import products from './products';

class ProductsAPI {
    static getProducts() {
        return new Promise((resolve) => {
            setTimeout(() => resolve(products), 500);
        })
    }

    static getProduct(id) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(products.find(x=> x.id === id)), 500);
        })
    }
}

export default ProductsAPI;