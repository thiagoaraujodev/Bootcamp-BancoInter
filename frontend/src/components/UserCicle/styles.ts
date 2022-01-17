import styled from 'styled-components'

export const CircleContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 400;
  font-size: 2rem;
`
