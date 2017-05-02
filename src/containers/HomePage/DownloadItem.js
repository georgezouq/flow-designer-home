import React from 'react';
import styled from 'styled-components';

const BaseWrapper = styled.div`
    opacity: 1;
    width: 33%;
    color: #fff;
    text-align: center;
    display: flex;
    box-sizing: border-box;
    text-decoration: none;
`;

const DownloadItemWrapper = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    margin: 0 80px 80px 80px;
    flex-grow: 1;
    text-decoration: none;
`;

const DownloadItemIcon = styled.div`
    flex-grow: 1;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-image: url(${props => props.img});
    opacity: ${props => props.disabled ? '.25' : ''};
    filter: ${props => props.disabled ? 'none' : ''};
    transition: -webkit-filter .15s ease-in-out;
    transition: filter .15s ease-in-out;
    transition: filter .15s ease-in-out,-webkit-filter .15s ease-in-out;
`;

const DownloadItemHeader = styled.div`
    font-size: 20px;
    margin-top: 20px;
    line-height: 2em;
`;

const DownloadItem = (props) => {
  return (
    <BaseWrapper>
      <DownloadItemWrapper>
        <DownloadItemIcon img={props.img}/>
        <DownloadItemHeader>{props.header}</DownloadItemHeader>
      </DownloadItemWrapper>
    </BaseWrapper>
  )
};

export default DownloadItem;
