'use client'
import styled from 'styled-components'

// Definindo as propriedades que o botão pode receber
interface ButtonProps {
  children: React.ReactNode  // O texto dentro do botão
  onClick?: () => void       // Função que será executada ao clicar
  variant?: 'primary' | 'secondary' | 'outline'  // Tipo de botão
}

// Estilização do Botão
const StyledButton = styled.button<{ variant: 'primary' | 'secondary' | 'outline' }>`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  // Estilos baseados no tipo de botão
  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return `
          background-color: #1ABC9C;
          color: white;
          
          &:hover {
            background-color: #16A085;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }
        `
      case 'secondary':
        return `
          background-color: #3498DB;
          color: white;
          
          &:hover {
            background-color: #2980B9;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }
        `
      case 'outline':
        return `
          background-color: transparent;
          color: #1ABC9C;
          border: 2px solid #1ABC9C;
          
          &:hover {
            background-color: #1ABC9C;
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }
        `
    }
  }}
  
  &:active {
    transform: translateY(0);
  }
`

// Componente Button
export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {children}
    </StyledButton>
  )
}