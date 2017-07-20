import styled from 'styled-components';
import {LogoImg} from './images';

const Logo = styled.a`
    background-size: contain;
    background: url(${LogoImg}) no-repeat left center;
    width: 160px;
    margin-right: 20px
    display:inline-block;
    background-size: 100% 100%;
`;

export default Logo;
