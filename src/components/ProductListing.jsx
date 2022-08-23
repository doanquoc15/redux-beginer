import React, { useEffect } from 'react';
import axios from 'axios'
import { useSelector , useDispatch} from 'react-redux'
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/action/productsActions';

const ProductListing = () => {
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
            .catch(error => {
                console.log('Error : ', error)
            });
        dispatch(setProducts(response.data))
    }
    useEffect(() => {
        fetchProducts();
    }, []);


    return (
        <div className='ui grid container'>
            <ProductComponent />
        </div>
    );
};

export default ProductListing;