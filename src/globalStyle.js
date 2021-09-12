import { createGlobalStyle } from 'styled-components';
import MontserratBold from 'url:../public/css/fonts/Montserrat-Bold.ttf';
import MontserratLight from 'url:../public/css/fonts/Montserrat-Light.ttf';
import MontserratMedium from 'url:../public/css/fonts/Montserrat-Medium.ttf';
import MontserratRegular from 'url:../public/css/fonts/Montserrat-Regular.ttf';

const globalStyle = createGlobalStyle`
    :root {
        --primary-red: #93181b;
        --secondary-red: #d11f26;
        --primary-black: #101112;
        --dark-gray: #323232;
        --gray: #434343;
        --success: #00a827;
    }

    @font-face {
        font-family: Montserrat;
        src: url(${MontserratLight});
        font-weight: 200;
    }
    @font-face {
        font-family: Montserrat;
        src: url(${MontserratRegular});
        font-weight: 300;
    }
    @font-face {
        font-family: Montserrat;
        src: url(${MontserratMedium});
        font-weight: 400;
    }
    @font-face {
        font-family: Montserrat;
        src: url(${MontserratBold});
        font-weight: bold;
    }

    * {
        font-family: 'Montserrat', sans-serif;
    }

    .title {
        font-size: 2.5rem;
        font-weight: bold;

        &.title-red {
            color: var(--primary-red);
        }
        &.title-gray {
            color: #979797;
        }
        &.title-white {
            color: white;
        }
    }

    .subtitle {
        font-size: 1.2rem;
        color: var(--gray);
        letter-spacing: 2px;
    }
`;

export default globalStyle;