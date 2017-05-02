import styled from 'styled-components';

const SectionBackground = styled.div`
    backgroundSize: cover;
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity .5s ease-in-out;
    transitionDelay: .25s;
    backgroundImage: url(${props => props.img})
`;

export default SectionBackground;
