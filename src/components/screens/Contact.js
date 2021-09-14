import React from 'react';
import mailIcon from '../../../public/images/mail.png';
import whatsappIcon from '../../../public/images/whatsapp.png';
import mapIcon from '../../../public/images/maps-and-flags.png';
import styled from 'styled-components';

const Info = styled.div`
    background: #efefef;
    padding: 1rem;
    width: 360px;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 0 0 20px 0 #cecece;

    img {
        margin-bottom: 1.5rem;
        padding: 1rem;
    }

    p {
        font-size: 1.2rem;

        a {
            color: var(--primary-black);
        }
    }
`;

const Contact = () => (
    <div className="py-5">
        <div className="container text-center">
            <h3 className="mb-3">Contato</h3>
            <p className="mb-4">Utilize uma das opções abaixo para obter mais informações ou realizar seu orçamento!</p>

            <div className="row justify-content-center">
                <div className="col-12 col-md-auto mb-5">
                    <Info>
                        <img src={whatsappIcon} />

                        <p><a href="https://api.whatsapp.com/send?phone=5522992433029" target="_blank">(22) 99243-3029</a> | (22) 2664-2782</p>
                    </Info>
                </div>

                <div className="col-12 col-md-auto mb-5">
                    <Info>
                        <img src={mailIcon} />

                        <p><a href="mailto:email@gmail.com.br">lojadoinstalador2021@gmail.com</a></p>
                    </Info>
                </div>

                <div className="col-12 col-md-auto mb-5">
                    <Info>
                        <img src={mapIcon} />

                        <p><a href="https://www.google.com.br/maps/search/R.+XV+de+Novembro,+187+-+XV+de+Novembro,+Araruama+-+RJ,+28970-000,+Brazil" target="_blank">Visualize no mapa</a></p>
                    </Info>
                </div>
            </div>
        </div>
    </div>
);

export default Contact;