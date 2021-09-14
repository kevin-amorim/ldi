import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/images/logo.png';
import styled from 'styled-components';

const NavBar = styled.nav`
    transition: all .3s;

    .logo {
        display: inline-block;
        width: 350px;
        max-width: 100%;
        padding: 1rem 0;

        img {
            max-width: 100%;
        }
    }

    .top-bar {
        background: var(--primary-red);
        padding-top: 1rem;
        padding-bottom: 1rem;

        p {
            color: white;
            text-align: center;
            margin: 0;
            font-size: 1.2rem;
            letter-spacing: 2px;
        }
    }

    .loja-info {
        p {
            margin: 0;
            padding: .5rem 0;
        }

        @media (min-width: 1383px) {
            justify-content: end;

            > div:nth-child(2) {
                border-left: 1px solid var(--primary-red);
                border-right: 1px solid var(--primary-red);
            }
        }
    }

    .menu-links {
        background: var(--primary-red);

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            padding: 1.4rem 0;
            text-align: center;

            li {
                padding: .4rem 1rem;
                display: inline-block;
                text-transform: uppercase;

                &:not(:last-child) {
                    border-right: 1px solid var(--secondary-red);
                }
            }
        }
    }
`;

const NavItem = styled(Link)`
    font-size: 1.1rem;
    color: white !important;
    transition: all .3s;
    text-decoration: none;
    position: relative;

    &::after {
        content: ' ';
        position: absolute;
        left: 0;
        bottom: -4px;
        height: 3px;
        width: ${props => props.active == 'true' ? '100%' : '0'};
        background: var(--primary-red);
        transition: .3s ease;
    }

    &:hover {
        color: var(--primary-black) !important;
    }
`;

const routes = [
    {
        key: 'home',
        name: 'Home',
        url: '/',
        inner: true,
    },
    {
        key: 'produtos',
        name: 'Produtos',
        url: '/produtos',
        inner: true,
    },
    // {
    //     key: 'catalogo',
    //     name: 'Catálogo Completo',
    //     url: 'https://www.meucomercio.com.br/lojadoinstaladorsegurancaeletronica',
    //     inner: false,
    // },
    {
        key: 'contato',
        name: 'Contato',
        url: '/contato',
        inner: true,
    }
];

const Nav = () => {
    let [currentUrl, setCurrentUrl] = useState(window.location.pathname);

    return (
        <NavBar>
            <div className="container-fluid top-bar">
                <p>Os melhores produtos, com os melhores preços.</p>
            </div>

            <div className="container py-3">
                <div className="row no-gutters align-items-center justify-content-center">
                    <div className="col-auto text-center">
                        <Link to={'/'} className="logo">
                            <img src={logo} onClick={() => setCurrentUrl('/')} />
                        </Link>
                    </div>

                    <div className="col d-none d-md-block">
                        <div className="row loja-info">
                            <div className="col-auto">
                                <p>
                                    <b className="d-block">E-mail</b>
                                    lojadoinstalador2021@gmail.com
                                </p>
                            </div>

                            <div className="col-auto">
                                <p>
                                    <b className="d-block">Telefone</b>
                                    (22) 99243-3029
                                    <br/>
                                    (22) 2664-2782
                                </p>
                            </div>

                            <div className="col-auto">
                                <p>
                                    <b className="d-block">Funcionamento</b>
                                    Seg-Sex: 08h - 18h | Sáb: 08h - 12h
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="menu-links">
                <div className="container">
                    <ul>
                        {
                            routes.map((route) => {
                                if (!route.inner) {
                                    return (
                                        <li key={route.key}>
                                            <NavItem 
                                                as="a" 
                                                href={route.url} target="_blank"
                                            >
                                                {route.name}
                                            </NavItem>
                                        </li>
                                    )
                                }
                                else {
                                    return (
                                        <li key={route.key}>
                                            <NavItem 
                                                to={route.url}
                                                active={(currentUrl == route.url).toString()}
                                                onClick={() => {
                                                    setCurrentUrl(route.url);
                                                }}
                                            >
                                                {route.name}
                                            </NavItem>
                                        </li>
                                    )
                                }
                            })
                        }
                    </ul>
                </div>
            </div>
        </NavBar>
    )
};

export default Nav;