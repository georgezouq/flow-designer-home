import styled from 'styled-components';
import {LogoImg} from './images';

const Logo = styled.a`
    background-size: contain;
    background: url(${LogoImg}) no-repeat left center;
    width: 150px;
    margin-right: 20px
    display:inline-block;
`;

export default Logo;
