import products from './products';

class ProductsAPI {
    static getProducts() {
        return new Promise((resolve) => {
            setTimeout(() => resolve(products), 2000);
        })
    }

    static getProduct(id) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(products.find(x=> x.id === id)), 3000);
        })
    }
}

export default ProductsAPI;