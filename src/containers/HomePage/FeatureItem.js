import React from 'react';
import styled from 'styled-components';

const FeatureItemWrapper = styled.div`
    opacity: 1;
    width: 25%;
    color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 0 10px 40px 10px;
    box-sizing: border-box;
`;

const FeatureItemIcon = styled.div`
    flex-grow: 1;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-image: url(${props => props.img});
`;

const FeatureItemHeader = styled.div`
    font-size: 20px;
    text-transform: uppercase;
    margin-top: 20px;
`;

const FeatureItemText = styled.div`
    font-size: 16px;
    line-height: 1.5em;
    margin-top: 20px;
    color: rgba(255,255,255,.75);
`;

const FeatureItem = (props) => {
  return (
    <FeatureItemWrapper>
      <FeatureItemIcon img={props.img}/>
      <FeatureItemHeader>{props.header}</FeatureItemHeader>
      <FeatureItemText>{props.children}</FeatureItemText>
    </FeatureItemWrapper>
  )
};

export default FeatureItem;
