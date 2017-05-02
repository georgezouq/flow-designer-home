import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    padding: 0 10px 40px 10px;
    width: 33.3%;
    color: #fff;
    opacity: 1;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    text-align: center;
`;

const ItemIcon = styled.div`
    flex-grow: 1;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0 0 10px rgba(0,0,0,.25);
    background-image: url(${props => props.img});
`;

const ItemHeader = styled.div`
    font-size: 20px;
    text-transform: uppercase;
    margin-top: 20px;
`;

const DesignerItem = (props) => {
  return (
    <Item>
      <ItemIcon img={props.img}/>
      <ItemHeader>{props.header}</ItemHeader>
    </Item>
  )
};

export default DesignerItem;
