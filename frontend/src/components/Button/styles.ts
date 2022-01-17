import styled from 'styled-components'

interface ButtonContainerProps {
  cColor: string
  cBackgroundColor: string
  cBackgroundColorHover: string
  cBorderColor: string
  cMaxWidth: string
  cMaxWidthSM?: string
  cMaxWidthMD?: string
  cMaxWidthLG?: string
  cMaxWidthXL?: string
  cMaxWidthXXL?: string
  cHeight?: string
  cMinWidth: string
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100%;
  min-width: ${props => props.cMinWidth};
  max-width: ${props => props.cMaxWidth};
  ${({ ...props }) => (props.cHeight ? 'height:' + props.cHeight : 'height:48px')};
  padding: 5px 15px;

  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;

  color: ${props => props.cColor};
  background: ${props => props.cBackgroundColor};
  border: 1px solid ${props => props.cBorderColor};
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5000;
  transition: all 0.2s ease-in-out;
  will-change: transform;

  &:hover {
    background: ${props => props.cBackgroundColorHover};
    filter: opacity(0.9);
    cursor: pointer;
  }

  &:disabled {
    filter: opacity(0.4);
  }

  //sm
  @media screen and (min-width: 576px) {
    ${({ ...props }) => (props.cMaxWidthSM ? 'max-width:' + props.cMaxWidthSM : '')};
  }
  //md
  @media screen and (min-width: 768px) {
    ${({ ...props }) => (props.cMaxWidthMD ? 'max-width:' + props.cMaxWidthMD : '')};
  }
  //lg
  @media screen and (min-width: 992px) {
    ${({ ...props }) => (props.cMaxWidthLG ? 'max-width:' + props.cMaxWidthLG : '')};
  }
  //xl
  @media screen and (min-width: 1200px) {
    ${({ ...props }) => (props.cMaxWidthXL ? 'max-width:' + props.cMaxWidthXL : '')};
  }
  //xxl
  @media screen and (min-width: 1400px) {
    ${({ ...props }) => (props.cMaxWidthXXL ? 'max-width:' + props.cMaxWidthXXL : '')};
  }
`
// background: ${({ theme }) => theme.colors.primary};
