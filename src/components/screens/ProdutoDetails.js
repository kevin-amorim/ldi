import React, { useState } from 'react';
import products from '../../api/produtos';
import ProductCard from '../shared/ProductCard';

const ProdutoDetails = (props) => {
    const productId = props.match.params.id;
    const product = products[productId];

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <p className="text-center">{product.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProdutoDetails;