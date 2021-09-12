import React from 'react';
import banner from '../../../public/images/banner-home.png';
import bannerAlarmes from '../../../public/images/banner-alarmes.png';
import bannerCftv from '../../../public/images/banner-cftv.png';
import bannerControles from '../../../public/images/banner-controles.png';
import bannerRedes from '../../../public/images/banner-redes.png';
import bgOrcamento from '../../../public/images/bg-orcamento.png';
import styled from 'styled-components';
import produtos from '../../api/produtos';
import ProductCard from '../shared/ProductCard';
import { Link } from 'react-router-dom';

const Banner = styled.div`
    width: 100%;
    height: 50vh;
    background-image: url(${banner});
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    h1 {
        color: white;
        font-size: 4.5rem;
        font-weight: bold;
        text-align: center;
        max-width: 65%;

        span {
            display: block;
            font-weight: 700;
            font-size: 4rem;
            color: var(--primary-red);
            font-family: Century-Gothic;
        }

        small {
            font-family: Century-Gothic;
            font-size: 1.5rem;
            display: inherit;
        }
    }

    @media (max-width: 550px) {
        h1 {
            font-size: 3rem;
        }
    }
`;

const Parceiros = styled.div`
    background: #efefef;
`;

const Orcamento = styled.div`
    background: var(--secondary-red);
    background-image: url(${bgOrcamento});
`;

const ButtonOrcamento = styled.a`
    font-size: 1.5rem;
    color: white;
    border: 3px solid white;
    border-radius: 3px;
    padding: .5rem 1rem;
    text-decoration: none;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        color: white;
        background: var(--secondary-red);
    }
`;

const HolderCategorias = styled.div`
    background: var(--secondary-red);
    margin-top: 120px;

    > div {
        margin-top: -120px;
    }

    img {
        max-width: 90%;
        margin: 0 auto;
        display: block;
        margin-bottom: 1.5rem;
        object-fit: cover;
        width: 305px;
        height: 175px;
        transition: all .3s;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        border-bottom-left-radius: 25px;
        box-shadow: 0 0 25px 0px #272727;

        &:hover {
            transform: scale(1.05);
        }
    }
    
    h3 {
        max-width: 90%;
        color: white;
        margin: 0 auto;
        text-align: center;
        font-weight: bold;
    }
`;

const Home = () => {
    const renderProducts = () => {
        let count = 1;
        let products = [];

        for (let id in produtos) {
            let produto = produtos[id];

            products.push(
                <div key={id} className="col-12 col-md-3">
                    <ProductCard
                        info={produto}
                    />
                </div>
            );

            count++;

            if (count > 4) {
                break;
            }
        };

        return products;
    }

    return (
        <div>
            <div className="mb-5">
                <Banner src={banner} className="img-responsive w-100">
                    <h1>O seu distribuidor na Região dos Lagos</h1>
                </Banner>
            </div>

            <div>
                <div className="container mb-5">
                    <h2 className="title title-red text-center">Produtos</h2>
                    <h3 className="subtitle text-center">Confira toda linha de produtos da Loja do Instalador</h3>
                </div>

                <HolderCategorias className="container-fluid py-5">
                    <div className="row justify-content-center">
                        <div className="col-auto mb-3">
                            <img src={bannerAlarmes} title="Alarmes" alt="Alarmes" />
                            <h3>Alarmes</h3>
                        </div>
                        
                        <div className="col-auto mb-3">
                            <img src={bannerCftv} title="CFTV" alt="CFTV" />
                            <h3>CFTV</h3>
                        </div>

                        <div className="col-auto mb-3">
                            <img src={bannerControles} title="Controles de Acesso" alt="Controles de Acesso" />
                            <h3>Controles de Acesso</h3>
                        </div>

                        <div className="col-auto mb-3">
                            <img src={bannerRedes} title="Redes" alt="Redes" />
                            <h3>Redes</h3>
                        </div>
                    </div>
                </HolderCategorias>
            </div>

            <div className="container-fluid py-5">
                <div className="container py-3">
                    <h2 className="title title-red text-center mt-0 mb-5">Produtos Destaque</h2>

                    <div className="row mb-4">
                        {renderProducts()}
                    </div>

                    <div className="text-center">
                        <Link to={'/produtos'} style={{color: 'var(--secondary-red)', fontSize: '1.2rem'}}>Ver todos os produtos</Link>
                    </div>
                </div>
            </div>

            {/* TODO */}
            {/* <Parceiros className="container-fluid py-5">
                <div className="container py-3">
                    <h2 className="title title-gray text-center m-0">Parceiros e Fornecedores</h2>
                </div>
            </Parceiros> */}

            <Orcamento className="container-fluid py-5">
                <div className="container py-3">
                    <h2 className="title title-white text-center mb-5">Solicite o seu orçamento!</h2>

                    <div className="text-center">
                        <ButtonOrcamento href="https://api.whatsapp.com/send?phone=5522988278904" target="_blank">
                            Clique aqui!
                        </ButtonOrcamento>
                    </div>
                </div>
            </Orcamento>
        </div>
    )
};

export default Home;