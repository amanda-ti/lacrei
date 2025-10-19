'use client'
import styled from 'styled-components'

// Estilização do Footer
const FooterContainer = styled.footer`
  width: 100%;
  background-color: #2C3E50;
  color: white;
  padding: 30px 40px;
  margin-top: auto;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
`

const FooterLink = styled.a`
  color: #1ABC9C;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

// Componente Footer
export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>
          © 2025 Lacrei Saúde - Todos os direitos reservados
        </FooterText>
        <FooterText style={{ marginTop: '10px' }}>
          Desenvolvido para o desafio técnico | {' '}
          <FooterLink href="https://lacreisaude.com.br" target="_blank">
            lacreisaude.com.br
          </FooterLink>
        </FooterText>
      </FooterContent>
    </FooterContainer>
  )
}