import styled from 'styled-components';

const DesignerItemList = styled.div`
    width: 100%;
    margin: 60px auto 20px auto;
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;

    & > * {
      animation: fadeIn ease-in 1;
      animation-fill-mode: forwards;
      animation-duration: .75s;
      animation-delay: .75s;
   }
`;

export default DesignerItemList;
