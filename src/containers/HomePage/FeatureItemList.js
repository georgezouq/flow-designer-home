import styled from 'styled-components';

const FeatureItemList = styled.div`
    width: 100%;
    margin: 60px auto 20px auto;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    
    & > * {
      animation: fadeIn ease-in 1;
      animation-fill-mode: forwards;
      animation-duration: .75s;
      animation-delay: .75s;
    }
`;

export default FeatureItemList;
