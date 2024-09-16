import styled, { css } from "styled-components";
import { respondOn } from "utils/ResposiveHelper";

export default {
  Header: styled.label`
    color: red;

    ${respondOn("tab-port").as(css`
      color: blue;
    `)}
  `,
};
