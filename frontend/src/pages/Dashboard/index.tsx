import { useEffect, useState } from 'react'

import useAuth from '../../hooks/useAuth'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Header from '../../components/Header'
import Input from '../../components/Input'
import Statement from './Statement'
import { BodyContainer, InLineContainer, InLineTitle } from './styles'
import { pay, request } from '../../services/resources/pix'

const Dashboard = () => {
  const { user, getCurrentUser } = useAuth()
  const wallet = user?.wallet || 0

  const [key, setKey] = useState('')
  const [generatedKey, setGeneratedKey] = useState('')
  const [messagePayment, setMessagePayment] = useState('')
  const [value, setValue] = useState('')

  useEffect(() => {
    getCurrentUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!user) {
    return null
  }

  const handleNewPayment = async () => {
    const { data } = await request(Number(value))

    if (data.copyPasteKey) {
      setGeneratedKey(data.copyPasteKey)
    }
  }

  const handlePayPix = async () => {
    try {
      const { data } = await pay(key)

      if (data.msg) {
        setMessagePayment('Pagamento Realizado.')
        return
      }

      return setMessagePayment('Não foi possível realizar o pagamento')
    } catch (e) {
      console.log(e)
      setMessagePayment('Não foi possível realizar o pagamento')
    }
  }

  return (
    <>
      <Header />

      <BodyContainer>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-md-6">
              <Card noShadow>
                <InLineTitle>
                  <h2 className="h2">Saldo Atual</h2>
                </InLineTitle>

                <InLineContainer>
                  <h3 className="wallet">{wallet.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
                </InLineContainer>
              </Card>

              <Card noShadow>
                <InLineTitle>
                  <h2 className="h2">Receber PIX</h2>
                </InLineTitle>

                <InLineContainer>
                  <Input
                    style={{ flex: 1 }}
                    placeholder="Ex.: 100,00"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                  />
                  <Button onClick={handleNewPayment} children="Gerar Código" />
                </InLineContainer>

                {generatedKey && (
                  <>
                    <p className="primary-color">Pix copia e cola</p>
                    <p className="primary-color">{generatedKey}</p>
                  </>
                )}
              </Card>

              <Card noShadow>
                <InLineTitle>
                  <h2 className="h2">Pagar PIX</h2>
                </InLineTitle>

                <InLineContainer>
                  <Input
                    style={{ flex: 1 }}
                    placeholder="Insira a chave"
                    value={key}
                    onChange={e => setKey(e.target.value)}
                  />
                  <Button onClick={handlePayPix} children="Pagar Pix" />
                </InLineContainer>
                {messagePayment && <p className="primary-color">{messagePayment}</p>}
              </Card>
            </div>

            <div className="col-12 col-md-6 ">
              <Card noShadow width="100%" height="100%">
                <InLineTitle>
                  <h2 className="h2">Extrato da conta</h2>
                </InLineTitle>

                <Statement />
              </Card>
            </div>
          </div>
        </div>
      </BodyContainer>
    </>
  )
}

export default Dashboard
