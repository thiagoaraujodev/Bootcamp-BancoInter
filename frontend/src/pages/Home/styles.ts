import styled from 'styled-components'
import { colors } from './../../styles/colors'

interface Styles {
  cWidth?: string
  cHeight?: string
  cHeightSM?: string
  cHeightMD?: string
  cHeightLG?: string
  cHeightXL?: string
  cHeightXXL?: string
  cMaxWidth?: string
  cMaxWidthSM?: string
  cMaxWidthMD?: string
  cMaxWidthLG?: string
  cMaxWidthXL?: string
  cMaxWidthXXL?: string
  cMinWidth?: string
  cMargin?: string
  cPadding?: string
  cPaddingSM?: string
  cPaddingMD?: string
  cPaddingLG?: string
  cPaddingXL?: string
  cPaddingXXL?: string
  cColor?: string
  cColorSM?: string
  cColorMD?: string
  cColorLG?: string
  cColorXL?: string
  cColorXXL?: string
  cFontSize?: string
  cFontSizeSM?: string
  cFontSizeMD?: string
  cFontSizeLG?: string
  cFontSizeXL?: string
  cFontSizeXXL?: string
  cFontFamily?: string
  cFontWeight?: string
  cBackgroundColor?: string
  cBackgroundColorHover?: string
  cBorderColor?: string
  cBackgroundImage?: string
  cBackgroundImageSM?: string
  cBackgroundImageMD?: string
  cBackgroundImageLG?: string
  cBackgroundImageXL?: string
  cBackgroundImageXXL?: string
  cImageHeight?: string
  cImageHeightSM?: string
  cImageHeightMD?: string
  cImageHeightLG?: string
  cImageHeightXL?: string
  cImageHeightXXL?: string
}

export const Main = styled.main`
  width: 100%;
  height: 100%;
`

export const Section = styled.section<Styles>`
  width: ${({ cWidth }) => cWidth};
  ${({ cHeight }) => (cHeight ? 'height:' + cHeight : '')};
  margin: ${({ cMargin }) => cMargin};
  ${({ cPadding }) => (cPadding ? 'padding:' + cPadding : '')};
  display: flex;
  color: ${({ cColor }) => cColor};
  background-color: ${({ cBackgroundColor }) => cBackgroundColor};
  ${({ cBackgroundImage }) => (cBackgroundImage ? 'background-image: url(' + cBackgroundImage + ')' : '')};
  background-repeat: no-repeat;
  background-size: cover;

  //SM
  @media screen and (min-width: 576px) {
    ${({ cHeightSM }) => (cHeightSM ? 'height:' + cHeightSM : '')};
    ${({ cPaddingSM }) => (cPaddingSM ? 'padding:' + cPaddingSM : '')};
    ${({ cBackgroundImageSM }) => (cBackgroundImageSM ? 'background-image: url(' + cBackgroundImageSM + ')' : '')};
  }
  //MD
  @media screen and (min-width: 768px) {
    ${({ cHeightMD }) => (cHeightMD ? 'height:' + cHeightMD : '')};
    ${({ cPaddingMD }) => (cPaddingMD ? 'padding:' + cPaddingMD : '')};
    ${({ cBackgroundImageMD }) => (cBackgroundImageMD ? 'background-image: url(' + cBackgroundImageMD + ')' : '')};
    background-size: auto 100%;
  }
  //LG
  @media screen and (min-width: 992px) {
    ${({ cHeightLG }) => (cHeightLG ? 'height:' + cHeightLG : '')};
    ${({ cPaddingLG }) => (cPaddingLG ? 'padding:' + cPaddingLG : '')};
    ${({ cBackgroundImageLG }) => (cBackgroundImageLG ? 'background-image: url(' + cBackgroundImageLG + ')' : '')};
  }
  //XL
  @media screen and (min-width: 1200px) {
    ${({ cPaddingXL }) => (cPaddingXL ? 'height:' + cPaddingXL : '')};
    ${({ cPaddingXL }) => (cPaddingXL ? 'padding:' + cPaddingXL : '')};
    ${({ cBackgroundImageXL }) => (cBackgroundImageXL ? 'background-image: url(' + cBackgroundImageXL + ')' : '')};
  }
  //XXL
  @media screen and (min-width: 1400px) {
    ${({ cHeightXXL }) => (cHeightXXL ? 'height:' + cHeightXXL : '')};
    ${({ cPaddingXXL }) => (cPaddingXXL ? 'padding:' + cPaddingXXL : '')};
    ${({ cBackgroundImageXXL }) => (cBackgroundImageXXL ? 'background-image: url(' + cBackgroundImageXXL + ')' : '')};
  }

  h2 {
    font-family: ${({ cFontFamily }) => (cFontFamily ? cFontFamily : 'Sora')}, sans-serif;
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 32px;

    & > span {
      margin-left: 48px;
    }

    @media screen and (min-width: 767px) {
      font-size: 64px;
    }
    @media screen and (min-width: 992px) {
      font-size: 72px;
    }
  }

  h3 {
    font-family: ${({ cFontFamily }) => (cFontFamily ? cFontFamily : 'Sora')}, sans-serif;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0.3px;

    @media screen and (min-width: 767px) {
      &.text-white {
        color: var(--bs-body-color) !important;
      }
    }
    @media screen and (min-width: 992px) {
      font-size: 32px;
    }
    @media screen and (min-width: 1200px) {
      font-size: 40px;
    }
  }
`

export const P = styled.p<Styles>`
  margin: ${({ cMargin }) => cMargin};
  ${({ cColor }) => (cColor ? 'color:' + cColor : 'color:' + colors.P_GRAY)};
  font-size: ${({ cFontSize }) => (cFontSize ? cFontSize : '18px')};
  font-family: ${({ cFontFamily }) => (cFontFamily ? cFontFamily : 'Inter')}, sans-serif;
  font-weight: ${({ cFontWeight }) => (cFontWeight ? cFontWeight : '400')};
  line-height: 22px;
  letter-spacing: 0.3px;

  @media screen and (min-width: 576px) {
    ${({ cBackgroundImageSM }) => (cBackgroundImageSM ? 'background-image: url(' + cBackgroundImageSM + ')' : '')};
    ${({ cColorSM }) => (cColorSM ? 'color:' + cColorSM : '')};
  }
  @media screen and (min-width: 768px) {
    ${({ cColorMD }) => (cColorMD ? 'color:' + cColorMD : '')};
    ${({ cBackgroundImageMD }) => (cBackgroundImageMD ? 'background-image: url(' + cBackgroundImageMD + ')' : '')};
    background-size: auto 100%;
  }
  @media screen and (min-width: 992px) {
    ${({ cColorLG }) => (cColorLG ? 'color:' + cColorLG : '')};
    ${({ cBackgroundImageLG }) => (cBackgroundImageLG ? 'background-image: url(' + cBackgroundImageLG + ')' : '')};
  }
  @media screen and (min-width: 1200px) {
    ${({ cColorXL }) => (cColorXL ? 'color:' + cColorXL : '')};
    ${({ cBackgroundImageXL }) => (cBackgroundImageXL ? 'background-image: url(' + cBackgroundImageXL + ')' : '')};
  }
  @media screen and (min-width: 1400px) {
    ${({ cColorXXL }) => (cColorXXL ? 'color:' + cColorXXL : '')};
    ${({ cBackgroundImageXXL }) => (cBackgroundImageXXL ? 'background-image: url(' + cBackgroundImageXXL + ')' : '')};
  }
`

export const Image = styled.div<Styles>`
  width: ${({ cWidth }) => cWidth};
  height: ${({ cImageHeight }) => cImageHeight};
  display: flex;
  ${({ cBackgroundImage }) => (cBackgroundImage ? 'background-image: url(' + cBackgroundImage + ')' : '')};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;

  //sm
  @media screen and (min-width: 576px) {
    ${({ cImageHeightSM }) => (cImageHeightSM ? 'height:' + cImageHeightSM : '')};
    ${({ cBackgroundImageSM }) => (cBackgroundImageSM ? 'background-image: url(' + cBackgroundImageSM + ')' : '')};
  }
  //md
  @media screen and (min-width: 768px) {
    ${({ cImageHeightMD }) => (cImageHeightMD ? 'height:' + cImageHeightMD : '')};
    ${({ cBackgroundImageMD }) => (cBackgroundImageMD ? 'background-image: url(' + cBackgroundImageMD + ')' : '')};
  }
  //lg
  @media screen and (min-width: 992px) {
    ${({ cImageHeightLG }) => (cImageHeightLG ? 'height:' + cImageHeightLG : '')};
    ${({ cBackgroundImageLG }) => (cBackgroundImageLG ? 'background-image: url(' + cBackgroundImageLG + ')' : '')};
  }
  //xl
  @media screen and (min-width: 1200px) {
    ${({ cImageHeightXL }) => (cImageHeightXL ? 'height:' + cImageHeightXL : '')};
    ${({ cBackgroundImageXL }) => (cBackgroundImageXL ? 'background-image: url(' + cBackgroundImageXL + ')' : '')};
  }
  //xxl
  @media screen and (min-width: 1400px) {
    ${({ cImageHeightXXL }) => (cImageHeightXXL ? 'height:' + cImageHeightXXL : '')};
    ${({ cBackgroundImageXXL }) => (cBackgroundImageXXL ? 'background-image: url(' + cBackgroundImageXXL + ')' : '')};
  }
`

/* //sm
 @media screen and (min-width: 576px) {
 }
 //md
 @media screen and (min-width: 768px) {
 }
 //lg
 @media screen and (min-width: 992px) {
 }
 //xl
 @media screen and (min-width: 1200px) {
 }
 //xxl
 @media screen and (min-width: 1400px) {
 } */
