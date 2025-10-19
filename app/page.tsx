'use client'
import styled from 'styled-components'
import { useRouter } from 'next/navigation'
import { Button } from './components/Button'

// Estilização da página
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`

const Title = styled.h1`
  font-size: 48px;
  color: #2C3E50;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const Subtitle = styled.p`
  font-size: 20px;
  color: #7F8C8D;
  margin-bottom: 40px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
`

const Card = styled.div`
  background-color: #ECF0F1;
  padding: 30px;
  border-radius: 12px;
  margin-top: 40px;
  text-align: left;
`

const CardTitle = styled.h2`
  color: #2C3E50;
  margin-bottom: 15px;
`

const CardText = styled.p`
  color: #7F8C8D;
  line-height: 1.8;
`

// Componente da Página Inicial
export default function Home() {
  const router = useRouter()

  // Função para navegar para a página "Quem Somos"
  function irParaQuemSomos() {
    router.push('/quem-somos')
  }

  // Função para abrir um link externo
  function abrirSiteLacrei() {
    window.open('https://lacreisaude.com.br', '_blank')
  }

  // Função para mostrar um alerta (exemplo de interação)
  function mostrarMensagem() {
    alert('Obrigado por visitar nosso site! 💚')
  }

  return (
    <Container>
      <Title>Bem-vindo à Lacrei Saúde</Title>
      
      <Subtitle>
        Conectando pessoas LGBTQIAPN+ a profissionais de saúde qualificados
        e acolhedores. Cuidado com respeito, dignidade e segurança.
      </Subtitle>

      {/* Grupo com os 3 botões interativos */}
      <ButtonGroup>
        <Button onClick={irParaQuemSomos} variant="primary">
          Conheça Nossa História
        </Button>
        
        <Button onClick={abrirSiteLacrei} variant="secondary">
          Visite o Site Oficial
        </Button>
        
        <Button onClick={mostrarMensagem} variant="outline">
          Deixe sua Mensagem
        </Button>
      </ButtonGroup>

      {/* Card informativo */}
      <Card>
        <CardTitle>Nossa Missão</CardTitle>
        <CardText>
          A Lacrei Saúde nasceu com o propósito de garantir que todas as pessoas
          tenham acesso a cuidados de saúde de qualidade, em um ambiente seguro,
          acolhedor e livre de discriminação. Conectamos pacientes a profissionais
          comprometidos com o respeito à diversidade.
        </CardText>
      </Card>
    </Container>
  )
}