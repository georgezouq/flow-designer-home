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
                <SectionContentHeader>21世纪 流程设计与组织变革专家</SectionContentHeader>
                <SectionContentTitle>杰成合力 凝聚十余年组织变革与流程管理经验，针对超大型企业打造流程私有云，助力企业腾飞。
                </SectionContentTitle>
                <ScreenShotItem/>
              </SectionContent>
              <Arrow href="#design"/>
            </div>
            <div className="section design">
              <SectionBackground img={images.DesignerBg}/>
              <SectionContent>
                <SectionContentHeader>一个工具诊断流程运行每一面</SectionContentHeader>
                <DesignerItemList>
                  <DesignerItem img={images.DesignerP1} header="专业流程设计器"/>
                  <DesignerItem img={images.DesignerP2} header="精准审视优化"/>
                  <DesignerItem img={images.DesignerP3} header="业务流全监控"/>
                  <DesignerItem img={images.DesignerP4} header="产业领域模型"/>
                  <DesignerItem img={images.DesignerP5} header="国际标准"/>
                  <DesignerItem img={images.DesignerP6} header="掌握组织运转热度"/>
                </DesignerItemList>
              </SectionContent>
              <Arrow href="#interface"/>
            </div>
            <div className="section interface">
              <SectionBackground img={images.InterfaceBg}/>
              <SectionContent>
                <SectionContentHeader >用户体验是我们一贯的追求</SectionContentHeader>
                <SectionContentTitle>享受一个简洁，直观的界面，按照期望调整流程每一面。
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
                <SectionContentHeader>强大的工具帮您了解流程运转的各个方面</SectionContentHeader>
                <FeatureItemList>
                  <FeatureItem img={images.FeatureP1} header="精准">
                    精确定位流程中存在的问题，提供行业解决方案
                  </FeatureItem>

                  <FeatureItem img={images.FeatureP2} header="架构">
                    根据不同层级组织与流程架构，逐层下落，清晰展现关联流程和业务走向
                  </FeatureItem>

                  <FeatureItem img={images.FeatureP3} header="专业">
                    流程管理, 组织变革, 业务监控, 审视优化 以及更多.
                  </FeatureItem>

                  <FeatureItem img={images.FeatureP4} header="架构">
                    根据不同层级组织与流程架构，逐层下落，清晰展现关联流程和业务走向
                  </FeatureItem>

                  <FeatureItem img={images.FeatureP5} header="国际化">
                    支持中／英文，对国际化团队友好，快速入手对流程进行设计
                  </FeatureItem>

                  <FeatureItem img={images.FeatureP6} header="文档">
                    我们提供全套的说明文档，帮助你和您的团队更快的上手开始设计
                  </FeatureItem>

                  <FeatureItem img={images.FeatureP7} header="导出">
                    平台支持流程导出图片，同时也提供定制化接口，将流程直接导入您的BPM等系统中。
                  </FeatureItem>

                  <FeatureItem img={images.FeatureP8} header="易用">
                    用户体验是我们一贯的最求，开发出最简介易用的产品，更好的服务用户
                  </FeatureItem>
                </FeatureItemList>
              </SectionContent>
              <Arrow href="#download"/>
            </div>
            <div className="section download">
              <SectionBackground img={images.DownloadBg}/>
              <SectionContent>
                <SectionContentHeader>跨平台</SectionContentHeader>
                <SectionContentTitle>在您喜欢的平台上设计／审视您的流程</SectionContentTitle>
                <DownloadItemList>
                  <DownloadItem img={images.DownloadP1} header="Windows"/>
                  <DownloadItem img={images.DownloadP2} header="macOS"/>
                  <DownloadItem img={images.DownloadP3} header="Linux"/>
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