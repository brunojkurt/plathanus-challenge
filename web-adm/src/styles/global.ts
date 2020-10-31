import styled, { createGlobalStyle, css } from 'styled-components';

// breakpoints
// xs: 0px | sm: 600px | md: 960px | lg: 1280px | xl: 1920px

export const breakpoints: {[type: string]: string } = {
  xs: '0',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px'
}

export const colors: {[type: string]: string } = {
  primary: '#8f14d2',
  secondary: '#00db7d',
  title: '#666666',
  success: '#75e5d5',
  error: '#e57878',
  warning: '#f9f78b',
  info: '#8beaf9',
  defaultBackground: '#e0e0e0'
}

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
  }
`

interface TContainer {
  size?: string;
}

export const Container = styled.main<TContainer>`
  width: 100%;
  display: block;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;

  ${({size}) => size && ({
      maxWidth: `${breakpoints[size]}`
    })
  }
`

const ShadowCss = css`
  box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.5);
`

export const Paper = styled.div<{ shadow?: boolean }>`
  width: auto;
  height: auto;
  box-sizing: border-box;
  background-color: #FFF;

  ${({shadow}) => shadow && ShadowCss }
`

export const SectionTitle = styled.h4`
  color: ${colors['title']};
  text-transform: uppercase;
  font-weight: 500;
  margin: 5px;
`