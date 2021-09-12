import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './components/screens/Home';
import About from './components/screens/About';
import Contact from './components/screens/Contact';
import Produtos from './components/screens/Produtos';
import ProdutoDetails from './components/screens/ProdutoDetails';
import { useLocation } from 'react-router';
import TopBarProgress from 'react-topbar-progress-indicator';

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
            
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/quem-somos" component={About} />
                <Route exact path="/contato" component={Contact} />
                <Route exact path="/produtos" component={Produtos} />
                <Route exact path="/produtos/:id" component={ProdutoDetails} />
            </Switch>
        </>
    )
};

export default Routes;