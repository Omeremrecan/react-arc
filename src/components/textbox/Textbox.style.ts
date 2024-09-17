import AppContext from "contexts/AppContext";
import { useContext } from "react";
import styled, { css } from "styled-components";
import { rgba } from "utils/ColorHelper";

export default {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
  `,
  Label: styled.label`
    ${() => {
      const { colors } = useContext(AppContext);

      return css`
        position: absolute;
        transition: 0.2s all;
        background-clip: padding-box;
        background: ${colors.main};
        line-height: 1rem;
        width: fit-content;
        margin-left: 0.5rem;
        top: -0.5rem;
        padding-left: 0.3rem;
        padding-right: 0.3rem;
        white-space: nowrap;
      `;
    }}
  `,
  Input: styled.input`
    ${() => {
      const { colors } = useContext(AppContext);

      return css`
        height: 3.5rem;
        font-size: 1rem;
        padding-left: 0.7rem;
        padding-right: 0.7rem;
        border-radius: 0.2rem;
        border: 1.5px solid ${colors.border};

        &:focus,
        &:active {
          border: 1.5px solid ${colors.primary};
          outline: none;
        }

        &:not(:focus)[value=""] ~ label{
          top:0.1rem;
          line-height: 3.5rem;
          font-size: 1.2rem;
        }

        &:focus ~ label{
          color: ${colors.primary};
        }

      `;
    }}
  `,
};
