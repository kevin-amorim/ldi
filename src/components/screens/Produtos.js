import React, { useState } from 'react';
import products from '../../api/produtos';
import ProductCard from '../shared/ProductCard';
import styled from 'styled-components';

const HolderFiltros = styled.div`
    width: 300px;
    padding: 2rem;
    border: 1px solid #efefef;
    border-radius: 10px;

    p {
        font-size: 1.2rem;
    }

    span {
        display: block;
        margin-bottom: 1rem;
        cursor: pointer;
    }
`;

const Produtos = () => {
    const [currentCategory, setCurrentCategory] = useState();

    const renderProducts = () => {
        let productsList = [];

        for (let id in products) {
            let produto = products[id];

            if (!currentCategory || produto.category == currentCategory) {
                productsList.push(
                    <div key={id} className="col-12 col-md-6 col-lg-4">
                        <ProductCard
                            info={produto}
                        />
                    </div>
                );
            }
        };

        if (productsList.length == 0) {
            productsList.push(
                <div key={1}>
                    <p className="text-center">Nenhum produto encontrado na categoria selecionada.</p>
                </div>
            )
        }

        return productsList;
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-auto d-none d-lg-block">
                    <HolderFiltros>
                        <p><b>Categorias</b></p>

                        <span onClick={() => setCurrentCategory(null)}>Todas</span>
                        <span onClick={() => setCurrentCategory('concertinas')}>Concertinas</span>
                        <span onClick={() => setCurrentCategory('cftv')}>CFTV</span>
                        <span onClick={() => setCurrentCategory('automatizadores')}>Automatizadores</span>
                        <span onClick={() => setCurrentCategory('alarmes')}>Alarmes</span>
                    </HolderFiltros>
                </div>

                <div className="col">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="mb-3 px-2">Produtos</h3>
                        </div>

                        {renderProducts()}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Produtos;