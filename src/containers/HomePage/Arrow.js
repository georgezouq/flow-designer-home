import React from 'react';
import styled from 'styled-components';

const ArrowImg = 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgODkgODkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEuNSI+DQogIDxwYXRoIGQ9Ik0yNi41MiAzOC4wNWwxOC4yMiAxOC4yMThMNjIuOTU2IDM4LjA1IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNiIvPg0KPC9zdmc+';

const ArrowWrapper = styled.div`
    opacity: 1;
`;

const BaseArrow = styled.a`
      display: block;
      position: absolute;
      border-radius: 100%;
      bottom: 10px;
      left: 50%;
      margin-left: -20px;
      width: 40px;
      height: 40px;
      z-index: 2;
      background-color: #e30061;
      background-image: url(${ArrowImg});
      background-size: contain;
      animation-name: arrow-bounce;
      animation-fill-mode: forwards;
      animation-duration: 2s;
      animation-iteration-count: infinite;
`;

const Arrow = (props) => (
  <ArrowWrapper>
    <BaseArrow href={props.href} />
  </ArrowWrapper>
  );

export default Arrow;
