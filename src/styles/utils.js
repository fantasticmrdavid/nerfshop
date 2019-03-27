import { css } from 'styled-components';

const mediaSizes = {
  desktop: 950,
  tablet: 576,
};

export const media = Object.keys(mediaSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${mediaSizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
