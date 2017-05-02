import styled from 'styled-components';
import {ScreenShotImg} from './images';

const ScreenShotItem = styled.div`
    background-image: url(${ScreenShotImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
    width: 100%;
    flex-grow: 1
`;

export default ScreenShotItem;
