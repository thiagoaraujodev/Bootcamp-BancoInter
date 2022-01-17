import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Inter',Arial, Helvetica, sans-serif;
      margin: 0;
      padding: 0;
      border: none;
      text-decoration: none;
      box-sizing: border-box;
  }

  body {
    font-family:'Inter',Arial, Helvetica, sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
  }

  input, button, textarea, select {
    font-family: 'Inter',Arial, Helvetica, sans-serif;
  }

  input:focus, textarea:focus, select:focus {
    outline: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }

  .wallet {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 30px;
  }

  .primary-color {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }


  .container, .container-fluid, .container-xxl, .container-xl, .container-lg, 
  .container-md, .container-sm {
    padding-right: var(--bs-gutter-x, 1.5rem);
    padding-left: var(--bs-gutter-x, 1.5rem);
  }

@media screen and (min-width: 768px) {
  .container, .container-fluid, .container-xxl, .container-xl, .container-lg, 
  .container-md, .container-sm {
    padding-right: var(--bs-gutter-x, 0.75rem);
    padding-left: var(--bs-gutter-x, 0.75rem);
  }
}


  @media screen and (min-width: 992px) {
    
   header .container-fluid{
      max-width: 1110px;
    }
  }

  @media screen and (min-width: 1200px) {
    .container,
    header .container-fluid{
      max-width: 1152px;
    }
  }

  @media screen and (min-width: 1600px) {
    .container,
    header .container-fluid{
      max-width: 1440px;
    }
  }
  
`

export default GlobalStyle
