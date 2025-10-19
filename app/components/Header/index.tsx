'use client'
import styled from 'styled-components'

// Estilização do Header
const HeaderContainer = styled.header`
  width: 100%;
  background-color: #1ABC9C;
  padding: 20px 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.h1`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`

// Componente Header
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>Lacrei Saúde</Logo>
        <Nav>
          <NavLink href="/">Início</NavLink>
          <NavLink href="/quem-somos">Quem Somos</NavLink>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  )
}