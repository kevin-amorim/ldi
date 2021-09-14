import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Switch, Route } from "react-router-dom";
const Home = lazy( () => import('./components/screens/Home'));
const About = lazy( () => import('./components/screens/About'));
const Contact = lazy( () => import('./components/screens/Contact'));
const Produtos = lazy( () => import('./components/screens/Produtos'));
const ProdutoDetails = lazy( () => import('./components/screens/ProdutoDetails'));
import { useLocation } from 'react-router';
import TopBarProgress from 'react-topbar-progress-indicator';
import styled from 'styled-components';

const Loading = styled.div`
    .loading-spinner {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }
    .loading-spinner div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid var(--secondary-red);
        border-radius: 50%;
        animation: loading-spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: var(--secondary-red) transparent transparent transparent;
    }

    .loading-spinner div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .loading-spinner div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .loading-spinner div:nth-child(3) {
        animation-delay: -0.15s;
    }

    @keyframes loading-spinner {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

const LoadingComponent = () => (<Loading><div className="loading-spinner"><div></div><div></div><div></div><div></div></div></Loading>);

TopBarProgress.config({
    barColors: {
        "0": "#d11f26",
        "1.0": "#d11f26"
    },
    shadowBlur: 5
});

const Routes = () => {
    const [currentLocation, setCurrentLocation] = useState();
    let location = useLocation();

    useEffect(() => {
        setCurrentLocation(location.pathname);
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            {location.pathname != currentLocation && <TopBarProgress />}
            
            <Suspense fallback={<div className="p-5 text-center"><LoadingComponent /></div>}>
                <Switch>
                    <Route exact path={'/'} component={Home} />
                    <Route exact path={'/quem-somos'} component={About} />
                    <Route exact path={'/contato'} component={Contact} />
                    <Route exact path={'/produtos'} component={Produtos} />
                    <Route exact path={'/produtos/:id'} component={ProdutoDetails} />
                </Switch>
            </Suspense>
        </>
    )
};

export default Routes;