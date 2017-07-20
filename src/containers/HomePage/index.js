/*
 * HomePage
 *
 */
import * as images from './images';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import $ from 'jquery';
import 'fullpage.js';
import '../../../node_modules/fullpage.js/dist/jquery.fullpage.css';

import Navigation from './Navigation';
import Arrow from './Arrow';
import ScreenShotItem from './ScreenShotItem';

import SectionBackground from './SectionBackground';
import SectionContent from './SectionContent';
import SectionContentHeader from './SectionContentHeader';
import SectionContentTitle from './SectionContentTitle';

import DesignerItemList from './DesignerItemList';
import DesignerItem from './DesignerItem';

import InterfaceItemList from './InterfaceItemList';
import InterfaceItem from './InterfaceItem';

import FeatureItemList from './FeatureItemList';
import FeatureItem from './FeatureItem';

import DownloadItemList from './DownloadItemList';
import DownloadItem from './DownloadItem';

const IntroductionPageWrapper = styled.div`
    background-size: cover;
    background-image: url(${images.PageBg});
    overflow: hidden;
`;

export default class HomePage extends React.Component {

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    $('#fullpage').fullpage({
      anchors: ["hero", "design", "interface", "features", "download"],
      recordHistory: false
    });
  }

  render() {
    return (
        <IntroductionPageWrapper>
          <Helmet
              title="Home Page"
              meta={[
                {name: 'description', content: '企业私有云-流程设计专家-主页'},
              ]}
          />
          <Navigation />
          <div id="fullpage">
            <div className="section hero">
              <SectionBackground img={images.ScreenShotBg}/>
              <SectionContent>
                <SectionContentHeader>流程管理与组织变革专家</SectionContentHeader>
                <SectionContentTitle>凝聚十余年的流程管理与组织变革经验，为中小型企业悉心打造的流程管理云平台
                </SectionContentTitle>
                <ScreenShotItem/>
              </SectionContent>
              <Arrow href="#design"/>
            </div>
            <div className="section design">
              <SectionBackground img={images.DesignerBg}/>
              <SectionContent>
                <SectionContentHeader>专注于流程设计工作的每一面</SectionContentHeader>
                <DesignerItemList>
                  <DesignerItem img={images.DesignerP1} header="快速启动"/>
                  <DesignerItem img={images.DesignerP4} header="精准设计"/>
                  <DesignerItem img={images.DesignerP5} header="内置模板"/>
                  <DesignerItem img={images.DesignerP3} header="状态监控"/>
                  <DesignerItem img={images.DesignerP2} header="专业指导"/>
                  <DesignerItem img={images.DesignerP6} header="实时通知"/>
                </DesignerItemList>
              </SectionContent>
              <Arrow href="#interface"/>
            </div>
            <div className="section interface">
              <SectionBackground img={images.InterfaceBg}/>
              <SectionContent>
                <SectionContentHeader>追求为用户带来更好的设计体验</SectionContentHeader>
                <SectionContentTitle>提供一个简洁，直观的设计界面
                </SectionContentTitle>
                <InterfaceItemList>
                  <InterfaceItem img={images.InterfaceP1}/>
                  <InterfaceItem img={images.InterfaceP2}/>
                  <InterfaceItem img={images.InterfaceP3}/>
                  <InterfaceItem img={images.InterfaceP4}/>
                  <InterfaceItem img={images.InterfaceP5}/>
                </InterfaceItemList>
              </SectionContent>
              <Arrow href="#features"/>
            </div>
            <div className="section features">
              <SectionBackground img={images.FeatureBg}/>
              <SectionContent>
                <SectionContentHeader>强大的特性帮您解决流程建设过程中的"绊脚石"</SectionContentHeader>
                <FeatureItemList>
                  <FeatureItem img={images.FeatureP1} header="精准">
                    按照企业所属的不同行业，精准匹配解决方案
                  </FeatureItem>

                  <FeatureItem img={images.FeatureP3} header="专业">
                    提供行业内流程建模最佳实践，专业的顾问支持服务
                  </FeatureItem>

                  <FeatureItem img={images.FeatureP2} header="层级展现">
                    按照不同层级的组织与架构，逐层下落，清晰展现关联流程和业务走向
                  </FeatureItem>

                  <FeatureItem img={images.FeatureP4} header="响应式">
                    提供响应式的画图体验，让您的流程设计工作更高效
                  </FeatureItem>

                  <FeatureItem img={images.FeatureP5} header="国际化">
                    支持中／英文，对国际化团队友好
                  </FeatureItem>

                  <FeatureItem img={images.FeatureP6} header="手册">
                    提供完善的操作手册，帮助您和您的团队快速上手
                  </FeatureItem>

                  <FeatureItem img={images.FeatureP7} header="导出">
                    支持将流程图导出为多种格式，满足您的各类需求
                  </FeatureItem>

                  <FeatureItem img={images.FeatureP8} header="持续优化">
                    平台会结合业内的最佳实践，定期进行升级和更新，帮助您站在业界的最前沿
                  </FeatureItem>
                </FeatureItemList>
              </SectionContent>
              <Arrow href="#download"/>
            </div>
            <div className="section download">
              <SectionBackground img={images.DownloadBg}/>
              <SectionContent>
                <SectionContentHeader>跨平台</SectionContentHeader>
                <SectionContentTitle>您可以在您喜爱的平台上开始流程管理工作</SectionContentTitle>
                <DownloadItemList>
                  <DownloadItem img={images.DownloadP1} header="Windows"/>
                  <DownloadItem img={images.DownloadP2} header="macOS"/>
                  <DownloadItem img={images.DownloadP4} header="Browser"/>
                  <DownloadItem img={images.DownloadP5} header="Android*"/>
                  <DownloadItem img={images.DownloadP6} header="iPad*"/>
                </DownloadItemList>
              </SectionContent>
            </div>
          </div>
        </IntroductionPageWrapper>
    );
  }
}