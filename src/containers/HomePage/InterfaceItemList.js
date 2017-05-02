import styled from 'styled-components';

const InterfaceItemList = styled.div`
    width: 100%;
    display: flex;
    flex-grow: 1;
    
    & > * {
      animation: fadeIn ease-in 1;
      animation-fill-mode: forwards;
      animation-duration: .75s;
      animation-delay: .75s;
    }
`;

export default InterfaceItemList;
