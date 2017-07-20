import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const NavigationWrapper = styled.div`
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    width: 100%;
    justify-content: space-between;
`;

const NavigationItemList = styled.ul`
    display: inline-block;
    list-style: none;
    margin: 0 15px;
    padding: 0 10px;
`;

const NavigationItem = styled.li`
    display: inline-block;
    line-height:40px;
    margin:20px 4px;
`;

const Navigation = () => {
  return (
      <NavigationWrapper>
        <NavigationItemList>
          <NavigationItem>
            <Logo href="/">&nbsp;</Logo>
          </NavigationItem>
          <NavigationItem>
            {/*<button className="primary">Discuss</button>*/}
          </NavigationItem>
          <NavigationItem>
            {/*<button className="primary">Blog</button>*/}
          </NavigationItem>
          <NavigationItem>
            {/*<button className="primary">Get in touch</button>*/}
          </NavigationItem>
        </NavigationItemList>
        <NavigationItemList>
          <NavigationItem>
            <button className="primary" size="large">在线使用</button>
          </NavigationItem>
          <NavigationItem>
            <button className="danger" size="large">下载企业版</button>
          </NavigationItem>
        </NavigationItemList>
      </NavigationWrapper>
  )
};

export default Navigation;
