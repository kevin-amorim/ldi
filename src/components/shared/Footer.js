import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import instagramIcon from '../../../public/images/instagram.png';
import facebookIcon from '../../../public/images/facebook.png';

const FooterBar = styled.div`
    .links {
        p {
            margin: 0;

            a {
                font-size: 1.2rem;
                font-weight: bold;
                color: var(--primary-red);
                text-decoration: none;
                transition: all .3s;
                letter-spacing: 1px;
                
                &:hover {
                    color: var(--secondary-red);
                }
            }
        }
    }

    .info {
        h2 {
            color: var(--primary-red);
        }

        p {
            font-size: 1.2rem;
            color: var(--gray);
        }

        a {
            color: var(--secondary-red);
            margin-right: 10px;
        }
    
        img {
            max-width: 25px;
        }
    }
`;

const Footer = () => {
    return (
        <FooterBar className="container py-5">
            <div className="row">
                <div className="col-xs-12 col-md p-3 links">
                    <p><Link to="/">Início</Link></p>
                    <p><Link to="/produtos">Produtos</Link></p>
                    <p><Link to="/contato">Contato</Link></p>
                </div>

                <div className="col-xs-12 col-md p-3 info">
                    <h2>Redes Sociais</h2>
                    <p>Siga-nos e fique por dentro de todas as novidades.</p>
                    <a href="https://www.instagram.com/loja_doinstalador/" target="_blank" title="Nos siga no Instagram!"><img src={instagramIcon} alt="Instagram" /></a>
                    <a href="https://www.facebook.com/ldoinstalador" target="_blank" title="Curta nosso Facebook!"><img src={facebookIcon} alt="Facebook" /></a>
                </div>

                <div className="col-xs-12 col-md p-3 info">
                    <h2>Onde Estamos?</h2>
                    <p><a href="https://www.google.com.br/maps/search/R.+XV+de+Novembro,+187+-+XV+de+Novembro,+Araruama+-+RJ,+28970-000,+Brazil" target="_blank">R. XV de Novembro, 187 - XV de Novembro - Araruama/RJ</a></p>
                </div>
            </div>
        </FooterBar>
    )
}

export default Footer;