import React, { useState } from 'react';
import products from '../../api/produtos';
import ProductCard from '../shared/ProductCard';
import styled from 'styled-components';
import { trackWindowScroll } from 'react-lazy-load-image-component';

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

const Backdrop = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 10;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);
    display: ${props => props.active == true ? 'block' : 'none'};
    overflow: hidden;
`;

const HolderFiltrosMobile = styled.div`
    background: white;
    width: 250px;
    padding: 2rem;
    position: fixed;
    z-index: 11;
    right: 0;
    top: 0;
    height: 100vh;
    transition: all .3s;
    transform: ${props => props.active == true ? 'translateX(0px)' : 'translateX(250px)'};

    p {
        font-size: 1.2rem;
    }

    span {
        display: block;
        margin-bottom: 1rem;
        cursor: pointer;
    }
`;

const Produtos = ({ scrollPosition }) => {
    const [currentCategory, setCurrentCategory] = useState();
    const [sidebarOn, setSidebarOn] = useState(false);

    const openFilters = () => {
        setSidebarOn(true);
        document.body.setAttribute('style', 'overflow: hidden;');
    }

    const closeFilters = () => {
        setSidebarOn(false);
        document.body.removeAttribute('style');
    }

    const filtrarPorCategoria = (categoria) => {
        setCurrentCategory(categoria); 
        closeFilters();
    }

    const renderProducts = () => {
        let productsList = [];

        for (let id in products) {
            let produto = products[id];

            if (!currentCategory || produto.category == currentCategory) {
                productsList.push(
                    <div key={id} className="col-12 col-md-6 col-lg-4">
                        <ProductCard
                            info={produto}
                            scrollPosition={scrollPosition}
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
            <Backdrop active={sidebarOn} onClick={() => closeFilters()}>
                
            </Backdrop>

            <HolderFiltrosMobile active={sidebarOn}>
                <p><b>Categorias</b></p>

                <span onClick={() => filtrarPorCategoria(null) }>Todas</span>
                <span onClick={() => filtrarPorCategoria('concertinas') }>Concertinas</span>
                <span onClick={() => filtrarPorCategoria('cftv') }>CFTV</span>
                <span onClick={() => filtrarPorCategoria('automatizadores') }>Automatizadores</span>
                <span onClick={() => filtrarPorCategoria('alarmes') }>Alarmes</span>
                <span onClick={() => filtrarPorCategoria('someimagem') }>Som e Imagem</span>
                <span onClick={() => filtrarPorCategoria('interfonia') }>Interfonia</span>
                <span onClick={() => filtrarPorCategoria('cabos') }>Cabos</span>
                <span onClick={() => filtrarPorCategoria('fibra') }>Fibra Óptica</span>
            </HolderFiltrosMobile>
            

            <div className="row">
                <div className="col-auto d-none d-lg-block center-block">
                    <HolderFiltros>
                        <p><b>Categorias</b></p>

                        <span onClick={() => filtrarPorCategoria(null)}>Todas</span>
                        <span onClick={() => filtrarPorCategoria('concertinas')}>Concertinas</span>
                        <span onClick={() => filtrarPorCategoria('cftv')}>CFTV</span>
                        <span onClick={() => filtrarPorCategoria('automatizadores')}>Automatizadores</span>
                        <span onClick={() => filtrarPorCategoria('alarmes')}>Alarmes</span>
                        <span onClick={() => filtrarPorCategoria('someimagem')}>Som e Imagem</span>
                        <span onClick={() => filtrarPorCategoria('interfonia')}>Interfonia</span>
                        <span onClick={() => filtrarPorCategoria('cabos')}>Cabos</span>
                        <span onClick={() => filtrarPorCategoria('fibra')}>Fibra Óptica</span>
                    </HolderFiltros>
                </div>

                <div className="col-12 d-lg-none mb-3" style={{borderTop: '1px solid #efefef', borderBottom: '1px solid #efefef', padding: '.5rem 0'}}>
                    <p className="row align-items-center m-0">
                        <img 
                            onClick={() => openFilters()} 
                            src="./images/filter.svg" 
                            alt="Filtros" 
                            title="Filtrar por categoria" 
                            style={{width: '45px'}}
                            className="col-auto"
                        /> 

                        <b 
                            className="col-auto p-0" 
                            onClick={() => openFilters()}
                        >
                            Filtrar por categorias
                        </b>
                    </p>
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

export default trackWindowScroll(Produtos);