import React from 'react';
import mailIcon from '../../../public/images/mail.png';
import whatsappIcon from '../../../public/images/whatsapp.png';
import mapIcon from '../../../public/images/maps-and-flags.png';
import styled from 'styled-components';

const Info = styled.div`
    background: #efefef;
    padding: 1rem;
    max-width: 320px;
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
                <div className="col-12 col-lg-4 col-xl-3 mb-5">
                    <Info>
                        <img src={whatsappIcon} />

                        <p><a href="https://api.whatsapp.com/send?phone=5522988278904" target="_blank">(22) 98827-8904</a></p>
                    </Info>
                </div>

                <div className="col-12 col-lg-4 col-xl-3 mb-5">
                    <Info>
                        <img src={mailIcon} />

                        <p><a href="mailto:email@gmail.com.br">email@gmail.com.br</a></p>
                    </Info>
                </div>

                <div className="col-12 col-lg-4 col-xl-3 mb-5">
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