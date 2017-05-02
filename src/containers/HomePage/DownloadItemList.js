import styled from 'styled-components';

const DownloadItemList = styled.div`
    width: 100%;
    margin: 0 auto;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    max-height: 550px;
    
    & > * {
      animation: fadeIn ease-in 1;
      animation-fill-mode: forwards;
      animation-duration: .55s;
      animation-delay: .35s;
    }
`;

export default DownloadItemList;
