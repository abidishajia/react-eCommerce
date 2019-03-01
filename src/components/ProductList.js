import React, { Component, Fragment } from 'react';
import Product from '../components/Product'
import Title from './Title';
import {ProductConsumer} from '../context'

class ProductList extends Component {
    render() { 
        return ( 
            <Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        <div className="row">
                            <ProductConsumer>
                                {(value) => {
                                    return value.products.map(product => {
                                        return ( <Product product={product} key={product.id}/> )
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>

            </Fragment>
         );
    }
}
 
export default ProductList;