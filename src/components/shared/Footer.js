import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
        }
    }
`;

const InstagramSVG = () => (<svg 
    width="35px" 
    height="35px" 
    viewBox="0 0 35 35" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
</svg>);

const Footer = () => {
    return (
        <FooterBar className="container py-5">
            <div className="row">
                <div className="col-xs-12 col-md p-3 links">
                    <p><Link to="/">Início</Link></p>
                    <p><Link to="/produtos">Produtos</Link></p>
                    <p><a href="https://www.meucomercio.com.br/lojadoinstaladorsegurancaeletronica" target="_blank">Catálago Completo</a></p>
                    <p><Link to="/contato">Contato</Link></p>
                </div>

                <div className="col-xs-12 col-md p-3 info">
                    <h2>Redes Sociais</h2>
                    <p>Siga-nos e fique por dentro de todas as novidades.</p>
                    <a href="https://www.instagram.com/loja_doinstalador/" target="_blank" title="Nos siga no Instagram!"><InstagramSVG /></a>
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