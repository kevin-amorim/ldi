import React from 'react';
import { getProductById } from '../../api/controllers/ProductController';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const BoxSVG = () => (<svg x="0px" y="0px" 
    width="25px" viewBox="0 0 64 64" fill="green" enableBackground="new 0 0 64 64">
    <path id="Box-open" d="M63.7588806,31.6450214l-7.0343971-8.2070007l7.0343971-8.2069998
	c0.1963005-0.2276001,0.2783051-0.5313005,0.2256012-0.8271999c-0.0527992-0.2959003-0.2364006-0.5517006-0.4990005-0.6971998
	l-22.7753983-12.6524c-0.3876991-0.2158-0.8720741-0.1494001-1.1894989,0.1640999l-6.9177017,6.8577003l-6.8547993-6.8548002
	c-0.3202991-0.3203-0.8164005-0.3857-1.2080002-0.1582L0.4990837,14.9810209
	c-0.2802,0.1620998-0.4648,0.4502001-0.4950767,0.7733994c-0.0293232,0.3232012,0.0995768,0.6397009,0.3456767,0.8506002
	l8.1463232,6.9822998l-7.0301232,9.3732014c-0.1738,0.2304001-0.2383,0.5252991-0.1777,0.8085976
	c0.0596,0.2821999,0.2392,0.5244026,0.4922,0.6650009l7.0041003,3.891201
	c-0.0300007,0.0951996-0.0598001,0.1912003-0.0598001,0.296299v9.2509995c0,1.2215996,0.6571999,2.3613014,1.7167997,2.9756012
	l20.3495979,11.7480011c0.547924,0.3153992,1.1612015,0.4735985,1.7754002,0.4735985
	c0.0060005,0,0.0117989-0.0010986,0.0177994-0.0010986c0.0055008,0,0.0100021,0.0030975,0.0153999,0.0030975
	c0.010601,0,0.0194016-0.0056992,0.0298996-0.0060997c0.5931015-0.010498,1.1842003-0.1648979,1.7133026-0.4694977
	l20.2871246-11.7129021c1.0966721-0.6348,1.7782745-1.8163986,1.7782745-3.0820007v-10.305397l7.1133003-4.3470001
	c0.25-0.1533012,0.4208984-0.4082031,0.4657974-0.6972008C64.0332794,32.1626205,63.9502831,31.8667202,63.7588806,31.6450214z
	 M31.5996838,34.3737221L11.8424835,23.3972206l19.7572002-12.0739002V34.3737221z M33.5996819,11.2827206l19.8236008,12.1145
	L33.5996819,34.4107208V11.2827206z M40.3955841,3.1675208l21.0478973,11.6924l-6.2397003,7.280901L34.2020836,9.3067207
	L40.3955841,3.1675208z M24.8770828,3.1782207l6.1504993,6.1506004L9.9556837,22.2058201l-7.2339001-6.2003994L24.8770828,3.1782207
	z M10.1340837,24.735321l20.9680977,11.6492004L24.7607822,44.91362L3.7540069,33.2427216L10.1340837,24.735321z
	 M11.4424839,49.1167221c-0.4424-0.2568016-0.7178001-0.7334023-0.7178001-1.2441025v-8.4692993l13.8310986,7.6841011
	c0.1533012,0.0849991,0.3193016,0.1259995,0.4843006,0.1259995c0.3077011,0,0.6093998-0.1416016,0.8038006-0.4033012
	l5.7558002-7.7420006v21.6858025L11.4424839,49.1167221z M54.4082832,47.8013191
	c0,0.5547028-0.2988014,1.0722008-0.7792778,1.3506012L33.5996819,60.7161217V39.0463219l5.8251991,7.7667007
	c0.1953011,0.2606964,0.4951248,0.4003983,0.8008003,0.4003983c0.1777,0,0.3584023-0.0479012,0.5205002-0.1464996
	l13.6621017-8.3488998V47.8013191z M40.4795837,44.886219l-6.3591003-8.4776001L55.180584,24.7081203l6.2960968,7.3461018
	L40.4795837,44.886219z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
);

const DetailsBar = styled.div`
    > p {
        background: var(--secondary-red);
        padding: 1rem;
        color: white;
        margin: 0;
        border-radius: 10px;
    }

    > div {
        padding: 1rem;
    }
`;

const Orcamento = styled.a`
    color: white;
    background: var(--primary-red);
    transition: all .3s;
    font-size: 1.2rem;
    padding: 5px 1rem;
    display: inline-block;
    border-radius: 10px;

    &:hover {
        color: white;
        background: var(--secondary-red);
    }
`;

const ImgDiv = styled.div`
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 0 20px #efefef;
`;

const ProdutoDetails = (props) => {
    const productId = props.match.params.id;
    const product = getProductById(productId);
    const orcamentoString = encodeURIComponent(`Ol??! Gostaria de mais informa????es sobre o produto ${product.name}.`);

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-12 col-md-7 mb-3">
                            <ImgDiv>
                                <img src={product.img} className="img-responsive" />
                            </ImgDiv>
                        </div>

                        <div className="col-12 col-md-5 mb-3">
                            <h1 className="mb-3">{product.name}</h1>
                            <p className="pronta-entrega mb-3"><BoxSVG /> Pronta Entrega</p>
                            <Orcamento href={`https://api.whatsapp.com/send?phone=5522992433029&text=${orcamentoString}`} target="_blank">Solicitar Or??amento</Orcamento>
                        </div>

                        <div className="col-12 mt-5">
                            {
                                product.description
                                &&
                                <DetailsBar>
                                    <p>Detalhes</p>

                                    <div dangerouslySetInnerHTML={{__html: product.description}}></div>
                                </DetailsBar>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default withRouter(ProdutoDetails);