import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Nav from './components/shared/Nav';
import Footer from './components/shared/Footer';
import Routes from './Routes';
import GlobalStyle from './globalStyle';

const App = () => {
    return (
        <Router>
            <GlobalStyle />

            <Nav />
            
            <div className="content-holder">
                <Routes />
            </div>

            <Footer />
        </Router>
    )
}

export default App;