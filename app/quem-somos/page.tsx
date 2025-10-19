'use client'
import styled from 'styled-components'
import { useRouter } from 'next/navigation'
import { Button } from '../components/Button'


// Estilização da página
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled.h1`
  font-size: 48px;
  color: #2C3E50;
  margin-bottom: 20px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const Section = styled.section`
  margin-bottom: 40px;
`

const SectionTitle = styled.h2`
  font-size: 32px;
  color: #1ABC9C;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const Text = styled.p`
  font-size: 18px;
  color: #7F8C8D;
  line-height: 1.8;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const HighlightBox = styled.div`
  background-color: #E8F8F5;
  border-left: 4px solid #1ABC9C;
  padding: 20px;
  margin: 30px 0;
  border-radius: 8px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`

// Componente da Página Quem Somos
export default function QuemSomos() {
  const router = useRouter()

  function voltarParaInicio() {
    router.push('/')
  }

  return (
    <Container>
      <Title>Quem Somos</Title>

      <Section>
        <SectionTitle>Nossa História</SectionTitle>
        <Text>
          A Lacrei Saúde foi fundada em 2020 com o objetivo de revolucionar
          o acesso à saúde para a população LGBTQIAPN+ no Brasil. Nascemos
          da necessidade de criar um espaço seguro onde todas as pessoas
          pudessem buscar cuidados médicos sem medo de discriminação ou
          preconceito.
        </Text>
        <Text>
          Desde então, já conectamos milhares de pacientes a profissionais
          de saúde qualificados e comprometidos com o atendimento humanizado
          e respeitoso.
        </Text>
      </Section>

      <HighlightBox>
        <SectionTitle style={{ marginTop: 0 }}>Nossa Visão</SectionTitle>
        <Text style={{ marginBottom: 0 }}>
          Ser a principal plataforma de saúde inclusiva do Brasil, garantindo
          que cada pessoa tenha acesso a cuidados de qualidade, independentemente
          de sua identidade de gênero, orientação sexual ou expressão de gênero.
        </Text>
      </HighlightBox>

      <Section>
        <SectionTitle>Nossos Valores</SectionTitle>
        <Text>
          <strong>Respeito:</strong> Tratamos todas as pessoas com dignidade
          e consideração, valorizando suas identidades e experiências.
        </Text>
        <Text>
          <strong>Inclusão:</strong> Criamos espaços seguros e acolhedores
          para todas as pessoas, sem exceção.
        </Text>
        <Text>
          <strong>Qualidade:</strong> Conectamos pacientes apenas a profissionais
          qualificados e comprometidos com a excelência no atendimento.
        </Text>
        <Text>
          <strong>Transparência:</strong> Mantemos comunicação clara e honesta
          com nossa comunidade.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Como Funciona</SectionTitle>
        <Text>
          Nossa plataforma permite que você encontre profissionais de saúde
          de diversas especialidades, todos comprometidos com o atendimento
          respeitoso e acolhedor. Você pode filtrar por localização,
          especialidade e disponibilidade, e agendar consultas de forma
          simples e segura.
        </Text>
      </Section>
      <ButtonContainer>
        <Button onClick={voltarParaInicio} variant="primary">
          Voltar para o Início
        </Button>
      </ButtonContainer>
      
    </Container>
  )
}