import { useNavigate } from 'react-router-dom'

import { colors } from '../../styles/colors'
import { Main, Section, Image, P } from './styles'

import backgroundIveteFormasLg from '../../assets/background-ivete-formas-lg.png'
import iveteBanner from '../../assets/background-ivete-banner.png'
import iveteBannerLg from '../../assets/background-ivete-banner-lg.png'
import homemFeliz from '../../assets/homem-feliz.png'
import homemFelizMD from '../../assets/homem-feliz-md.png'
import homemFelizLG from '../../assets/homem-feliz-lg.png'
import celularCartao from '../../assets/celular-cartao.png'
import homemFelizCelular from '../../assets/homem-feliz-celular.png'
import mulherFelizFone from '../../assets/mulher-feliz-fone.png'
import mulherFelizFoneMD from '../../assets/mulher-feliz-fone-md.png'
import mulherFelizFoneLG from '../../assets/mulher-feliz-fone-lg.png'
import homemFelizCafe from '../../assets/homem-feliz-cafe.png'
import casalFelizAssistindo from '../../assets/casal-feliz-assistindo.png'
import mulherFelizCelular from '../../assets/mulher-feliz-celular.png'

import Header from '../../components/Header'
import Button from '../../components/Button'

const Home = () => {
  const navigate = useNavigate()

  const handleToSignIn = () => {
    navigate('/signup')
  }

  return (
    <>
      <Header />

      <Main>
        <Section
          cBackgroundImage={backgroundIveteFormasLg}
          cBackgroundColor="#f5f6fa"
          // cMargin="75px 0 0 0"
          cPaddingMD="75px 0 0 0"
        >
          <div className="container overflow-hidden mt-5">
            <div className="row m-0 mt-2 mt-sm-5">
              <Image
                cBackgroundImage={iveteBanner}
                cBackgroundImageMD={iveteBannerLg}
                cImageHeight="430px"
                cImageHeightMD="510px"
                cImageHeightLG="630px"
                className="col-12 col-md-6 order-md-last"
              />

              <div className="col-12 col-md-6">
                <h2 className="d-md-none text-center">
                  ANO NOVO, <span className="m-0">CARTÃO NOVO</span>.
                </h2>
                <h2 className="d-none d-md-inline">
                  ANO
                  <br />
                  NOVO,
                  <br />
                  <span>CARTÃO </span>
                  <br />
                  <span>NOVO</span>.
                </h2>
                <P className="text-center text-md-start">
                  Simplifique com cartão Inter sem anuidade e cashback na fatura.
                </P>
                <Button
                  cColor={colors.BACKGROUND}
                  cBackgroundColor={colors.PRIMARY}
                  cBorderColor={colors.PRIMARY}
                  cMaxWidthMD="266px"
                  className="mb-5"
                  onClick={handleToSignIn}
                  children="Abra sua conta!"
                />
              </div>
            </div>
          </div>
        </Section>

        <Section
          cBackgroundImage={homemFeliz}
          cBackgroundImageMD={homemFelizMD}
          cBackgroundImageLG={homemFelizLG}
          cBackgroundColor={colors.PRIMARY}
          cColor={colors.BACKGROUND}
          cHeight="445px"
          cHeightMD="315px"
          cHeightLG="440px"
        >
          <div className="container overflow-hidden d-flex align-items-center h-100">
            <div className="col-12 col-md-6 offset-md-6 col-lg-5 offset-lg-7 mt-auto mb-5 mt-md-0 mb-md-0">
              <h3>
                Conta digital gratuita, shopping nacional e internacional, investimentos, seguros, e o que mais a sua
                vida precisar.
              </h3>
            </div>
          </div>
        </Section>

        <Section cPadding="100px 0 48px 0">
          <div className="container">
            <div className="row m-0 justify-content-between">
              <Image cBackgroundImage={celularCartao} cImageHeight="515px" className="col-12 col-md-6 " />

              <div className="col-12 col-md-5 align-self-center ">
                <P cFontFamily="Sora" cFontSize="20px" cFontWeight="600" className="mt-4 mt-md-0">
                  Inter Bank
                </P>

                <h3 className="mb-4">Diferente, sem pegadinhas e sem tarifas: como você sempre quis.</h3>

                <P>
                  Planeje e invista no futuro do seu filho com a <span>Conta Kids</span> ou abra uma
                  <span> Conta Digital</span> 100% isenta de tarifas e com tudo que você precisa.
                </P>
              </div>
            </div>
          </div>
        </Section>

        <Section cPadding="0 0 48px 0">
          <div className="container overflow-hidden pb-md-4">
            <div className="row m-0 justify-content-between">
              <Image
                cBackgroundImage={homemFelizCelular}
                cImageHeight="375px"
                className="col-12 col-md-6 order-md-last"
              />

              <div className="col-12 col-md-5 align-self-center ">
                <P cFontFamily="Sora" cFontSize="20px" cFontWeight="600" className="mt-4 mt-md-0">
                  Inter Invest
                </P>

                <h3 className="mb-4">Seu Dinheiro, suas escolhas. Invista do seu jeito!</h3>

                <P>Praticidade e segurança. Conheça a Inter Invest, nossa plataforma unificada de investimentos.</P>

                <Button
                  cColor={colors.BACKGROUND}
                  cBackgroundColor={colors.PRIMARY}
                  cBorderColor={colors.PRIMARY}
                  cMaxWidthMD="360px"
                  className="mt-4"
                  onClick={handleToSignIn}
                  children="Começar a investir"
                />
              </div>
            </div>
          </div>
        </Section>

        <Section
          cBackgroundImage={mulherFelizFone}
          cBackgroundImageMD={mulherFelizFoneMD}
          cBackgroundImageLG={mulherFelizFoneLG}
          cHeight="440px"
          cHeightLG="555px"
          cBackgroundColor="#f5f6fa"
        >
          <div className="container overflow-hidden d-flex align-items-center h-100">
            <div className="col-12 col-md-6 offset-md-6 col-lg-5 offset-lg-7 mt-auto mb-5 mt-md-0 mb-md-0">
              <P
                cFontFamily="Sora"
                cFontSize="20px"
                cFontWeight="600"
                cColor={colors.BACKGROUND}
                cColorMD={colors.P_GRAY}
              >
                Inter Shop
              </P>

              <h3 className="mb-4 text-white">Você entra no shopping sem sair do Inter e ainda ganha cashback.</h3>

              <P cColor={colors.BACKGROUND} cColorMD={colors.P_GRAY}>
                Tudo o que você procura em um só lugar. No Inter Shop você tem dinheiro de volta direto na sua conta.
              </P>

              <Button
                cColor={colors.BACKGROUND}
                cBackgroundColor={colors.PRIMARY}
                cBorderColor={colors.PRIMARY}
                cMaxWidthMD="360px"
                className="mt-4"
                onClick={handleToSignIn}
                children="Ganhar Cashback"
              />
            </div>
          </div>
        </Section>

        <Section cPadding="95px 0 95px 0">
          <div className="container overflow-hidden">
            <div className="row m-0 justify-content-between">
              <Image cBackgroundImage={homemFelizCafe} cImageHeight="380px" className="col-12 col-md-6 order-md-last" />

              <div className="col-12 col-md-5 align-self-center ">
                <P cFontFamily="Sora" cFontSize="20px" cFontWeight="600" className="mt-4 mt-md-0">
                  Inter Empresas
                </P>

                <h3 className="mb-4">A agilidade e parceria que o seu negócio precisa.</h3>

                <P>Para você, empreendedor ou gestor que precisa de gestão simplificada do seu negócio.</P>

                <Button
                  cColor={colors.BACKGROUND}
                  cBackgroundColor={colors.PRIMARY}
                  cBorderColor={colors.PRIMARY}
                  cMaxWidthMD="360px"
                  className="mb-3"
                  onClick={handleToSignIn}
                  children="Conhecer a Conta Digital PJ"
                />

                <Button
                  cColor={colors.PRIMARY}
                  cBackgroundColor={colors.BACKGROUND}
                  cBackgroundColorHover={colors.BACKGROUND2}
                  cMaxWidthMD="360px"
                  onClick={handleToSignIn}
                  children="Conhecer a Conta Digital MEI"
                />
              </div>
            </div>
          </div>
        </Section>

        <Section cBackgroundColor="#f5f6fa" cPadding="48px 0">
          <div className="container overflow-hidden">
            <div className="row m-0 justify-content-between">
              <Image
                cBackgroundImage={casalFelizAssistindo}
                cImageHeight="450px"
                className="col-12 col-md-6 align-self-center"
              />

              <div className="col-12 col-md-5 align-self-center ">
                <P cFontFamily="Sora" cFontSize="20px" cFontWeight="600" className="mt-4 mt-md-0">
                  Inter Seguros
                </P>

                <h3 className="mb-4">O seguro ideal, pra você proteger o que realmente importa.</h3>

                <P>
                  Uma plataforma com opções de seguros para o seu momento, com várias modalidades, pra você, sua família
                  e sua empresa.
                </P>

                <Button
                  cColor={colors.BACKGROUND}
                  cBackgroundColor={colors.PRIMARY}
                  cBorderColor={colors.PRIMARY}
                  cMaxWidthMD="360px"
                  className="mt-4"
                  onClick={handleToSignIn}
                  children="Conhecer a Inter Seguros"
                />
              </div>
            </div>
          </div>
        </Section>

        <Section cPadding="100px 0 ">
          <div className="container overflow-hidden">
            <div className="row m-0 justify-content-between">
              <Image
                cBackgroundImage={mulherFelizCelular}
                cImageHeight="455px"
                className="col-12 col-md-6 order-md-last"
              />

              <div className="col-12 col-md-5 align-self-center">
                <P cFontFamily="Sora" cFontSize="20px" cFontWeight="600" className="mt-4 mt-md-0">
                  Empréstimos e Financiamento
                </P>

                <h3 className="mb-4">Opções de crédito feitas para você.</h3>

                <P>
                  Do empréstimo pessoal ao financiamento da sua casa, descomplicamos o seu crédito com um jeito simples
                  de simular e contratar e taxas que você pode pagar.
                </P>

                <Button
                  cColor={colors.BACKGROUND}
                  cBackgroundColor={colors.PRIMARY}
                  cBorderColor={colors.PRIMARY}
                  cMaxWidthMD="360px"
                  className="mt-4"
                  onClick={handleToSignIn}
                  children="Simular meu Empréstimo"
                />
              </div>
            </div>
          </div>
        </Section>

        <Section cBackgroundColor={colors.PRIMARY} cColor={colors.BACKGROUND}>
          <div className="container overflow-hidden">
            <div className="row m-0 justify-content-center text-center mt-5">
              <h3>O Inter já devolveu tudo isso de cashback:</h3>
              <h2 className="mb-3">R$ 310.318.244,89</h2>
              <p className="mb-4">Quer ganhar cashback também? Clique abaixo e saiba como:</p>

              <Button
                cColor={colors.PRIMARY}
                cBackgroundColor={colors.BACKGROUND}
                cBackgroundColorHover={colors.BACKGROUND2}
                cMaxWidthMD="300px"
                className="mb-5"
                onClick={handleToSignIn}
                children="Como ganhar cashback"
              />
            </div>
          </div>
        </Section>
      </Main>
    </>
  )
}

export default Home
