import styled from 'styled-components'

interface Styles {
  cBackground?: string
  cBackgroundColor?: string
  cFilter?: string
}

export const HeaderContainer = styled.header<Styles>`
  width: 100%;
  height: 50px;
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 1030;

  background: ${({ cBackground }) => cBackground};
  background-color: ${({ cBackgroundColor }) => cBackgroundColor};
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */

  img {
    margin-left: 20px;
    ${({ cFilter }) => (cFilter ? 'filter:' + cFilter : '')};
  }

  @media screen and (min-width: 992px) {
    height: 75px;
    img {
      margin-left: 0;
    }
  }
`

export const HeaderWrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
`

export const UserInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  cursor: default;

  & div > span {
    cursor: pointer;
  }
`
