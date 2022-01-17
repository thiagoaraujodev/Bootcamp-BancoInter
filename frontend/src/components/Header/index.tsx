import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

import { colors } from '../../styles/colors'
import { HeaderContainer, HeaderWrapper, UserInfo } from './styles'

import logoInter from '../../assets/logo.svg'

import UserCircle from '../UserCicle'
import Button from '../Button'
import ButtonBurger from '../ButtonBurger'

const Header = () => {
  const [navbarColor, setNavbarColor] = useState(false)
  const [sizeWidth, setSizeWidth] = useState(window.innerWidth)

  const navigate = useNavigate()
  const { user } = useAuth()

  const initials = user.firstName ? user.firstName.substring(0, 1) + user.lastName.substring(0, 1).toUpperCase() : ''

  const handleLogoff = () => {
    localStorage.removeItem('@Inter:Token')
    localStorage.removeItem('@Inter:User')
    // navigate('/')
  }

  const handleToSignIn = () => {
    navigate('/signup')
  }

  const handleToSignUp = () => {
    navigate('/signin')
  }

  //verifica se deu scroll na página
  const changeBackground = () => {
    if (window.scrollY > 10) {
      setNavbarColor(true)
    } else {
      setNavbarColor(false)
    }
  }
  window.addEventListener('scroll', changeBackground)

  //pegando o tamanho da tela
  const changeDimensions = () => {
    setSizeWidth(window.innerWidth)
  }
  window.addEventListener('resize', changeDimensions)

  return (
    <HeaderContainer
      cBackgroundColor={navbarColor ? undefined : colors.BACKGROUND}
      cBackground={navbarColor ? colors.PRIMARY_NAVBAR : undefined}
      cFilter={navbarColor ? 'brightness(0) invert(1)' : undefined}
    >
      <div className="container-fluid">
        <HeaderWrapper>
          {sizeWidth < 992 ? <ButtonBurger cColor={navbarColor ? colors.BACKGROUND : colors.PRIMARY} /> : ''}

          <img
            src={logoInter}
            alt="logo inter"
            width={sizeWidth < 992 ? 80 : 100}
            height={36}
            onClick={() => navigate('/')}
          />

          <UserInfo>
            {user.firstName ? (
              <>
                <UserCircle initials={initials} />
                <div>
                  <p className="m-0">
                    Olá,
                    <span className="primary-color font-bold">
                      {user.firstName} {user.lastName}
                    </span>
                  </p>
                  <strong>
                    {user.accountNumber}-{user.accountDigit}
                  </strong>
                  <br />

                  <a href="/" onClick={handleLogoff}>
                    <span>Sair</span>
                  </a>
                </div>
              </>
            ) : (
              <>
                {sizeWidth > 991 ? (
                  <>
                    <Button
                      cBackgroundColor={navbarColor ? colors.GREEN : colors.PRIMARY}
                      cBorderColor={navbarColor ? colors.GREEN : colors.PRIMARY}
                      cColor={colors.BACKGROUND}
                      cMaxWidthMD="150px"
                      cHeight="36px"
                      onClick={handleToSignIn}
                      children="Abra sua conta"
                    />

                    <Button
                      cBackgroundColor={colors.BACKGROUND}
                      cBackgroundColorHover={colors.BACKGROUND2}
                      cColor={colors.PRIMARY}
                      cMaxWidthMD="90px"
                      cHeight="36px"
                      onClick={handleToSignUp}
                      children="Acessar"
                    />
                  </>
                ) : (
                  ''
                )}
              </>
            )}
          </UserInfo>
        </HeaderWrapper>
      </div>
    </HeaderContainer>
  )
}

export default Header
