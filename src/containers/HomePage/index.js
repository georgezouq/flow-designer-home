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
                <SectionContentHeader>A cross-platform design tool for the 21st century</SectionContentHeader>
                <SectionContentTitle>Gravit Designer is a full featured free vector design app right at your
                  fingertip.
                </SectionContentTitle>
                <ScreenShotItem/>
              </SectionContent>
              <Arrow href="#design"/>
            </div>
            <div className="section design">
              <SectionBackground img={images.DesignerBg}/>
              <SectionContent>
                <SectionContentHeader>One tool to rule them all</SectionContentHeader>
                <DesignerItemList>
                  <DesignerItem img={images.DesignerP1} header="Screen Design"/>
                  <DesignerItem img={images.DesignerP2} header="High Quality Icons"/>
                  <DesignerItem img={images.DesignerP3} header="Presentations"/>
                  <DesignerItem img={images.DesignerP4} header="Illustration"/>
                  <DesignerItem img={images.DesignerP5} header="Print"/>
                  <DesignerItem img={images.DesignerP6} header="Prototyping & Animation"/>
                </DesignerItemList>
              </SectionContent>
              <Arrow href="#interface"/>
            </div>
            <div className="section interface">
              <SectionBackground img={images.InterfaceBg}/>
              <SectionContent>
                <SectionContentHeader >A smart way to design</SectionContentHeader>
                <SectionContentTitle>Enjoy a clean, intuitive interface that adjusts itself exactly the way you expect
                  it.
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
                <SectionContentHeader>Powerful tools to unleash your creativity</SectionContentHeader>
                <FeatureItemList>
                  <FeatureItem img={images.FeatureP1} header="Precision">
                    Unmatched precision in any unit (Pixels, MM, CM, etc.) from creation to
                    exporting.
                  </FeatureItem>

                  <FeatureItem img={images.FeatureP2} header="Structure">
                    Powerful pages with masters, real layers and symbols to structure your
                    content.
                  </FeatureItem>

                  <FeatureItem img={images.FeatureP3} header="Vector">
                    Made for vector with non-destructive booleans, knife tool and path graphs.
                  </FeatureItem>

                  <FeatureItem img={images.FeatureP4} header="Layout">
                    Powerful grids, anchors and auto-layouts made for pixel perfect screen designs.
                  </FeatureItem>

                  <FeatureItem img={images.FeatureP5} header="Style">
                    Multiple fills/borders, effects and blending modes together with shared styles.
                  </FeatureItem>

                  <FeatureItem img={images.FeatureP6} header="Text">
                    Handcrafted powerful text engine with text on path, web fonts, styles and much more.
                  </FeatureItem>

                  <FeatureItem img={images.FeatureP7} header="Export">
                    Export high quality PDFs, SVGs and Images using slices and multiple assets.
                  </FeatureItem>

                  <FeatureItem img={images.FeatureP8} header="Advanced">
                    Presentations, animations, states, prototyping and more.
                  </FeatureItem>
                </FeatureItemList>
              </SectionContent>
              <Arrow href="#download"/>
            </div>
            <div className="section download">
              <SectionBackground img={images.DownloadBg}/>
              <SectionContent>
                <SectionContentHeader>Download</SectionContentHeader>
                <SectionContentTitle>Enjoy a free powerful design tool on any platform</SectionContentTitle>
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