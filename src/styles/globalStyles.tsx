import { css } from 'styled-components';

export const css_truncate_text = () => {
  return css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
};

export const css_button_disabled = () => {
  return css`
    text-align: center;
    text-decoration: none;
    border: none;
    display: inline-block;
    outline: none;
  `;
};

export const css_button = () => {
  return css`
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    border: none;
    display: inline-block;
  `;
};

export const css_flex_col = () => {
  return css`
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
};

export const css_flex_row = () => {
  return css`
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
};

export const css_hide_scrollbars = () => {
  return css`
    /* Disable scrollbar view */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
  `;
};
