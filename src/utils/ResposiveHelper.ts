import { css } from "styled-components";

export type Screen = "phone" | "tab-port" | "tab-land" | "desktop";

export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1280,
  xl: 1800,
};

/**
 * @argument "phone" - max 600px
 * @argument "tab-port" -  max 900px
 * @argument "tab-land" - max 1280px
 * @argument "desktop" - min 1800px
 */
export const respondOn = (breakpoint: Screen) => {
  return {
    as: (content: any) => {
      switch (breakpoint) {
        case "phone":
          return css`
            @media (max-width: ${breakpoints.sm / 16}em) {
              ${content}
            }
          `;
        case "tab-port":
          return css`
            @media (max-width: ${breakpoints.md / 16}em) {
              ${content}
            }
          `;
        case "tab-land":
          return css`
            @media (max-width: ${breakpoints.lg / 16}em) {
              ${content}
            }
          `;
        case "desktop":
          return css`
            @media (min-width: ${breakpoints.xl / 16}em) {
              ${content}
            }
          `;
      }
    },
  };
};
