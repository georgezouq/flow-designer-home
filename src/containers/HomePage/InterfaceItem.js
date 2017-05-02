import styled from 'styled-components';

const InterfaceItem = styled.div`
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    width: 20%;
    margin-right: 40px;
    opacity: 1;
    background-image: url(${props => props.img});

`;

export default InterfaceItem;
