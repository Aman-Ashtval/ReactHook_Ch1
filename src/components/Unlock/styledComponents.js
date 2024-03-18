import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(#161617, #0b0c1e, #3c2940);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const LockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`

export const Image = styled.img`
  width: 150px;
  height: 150px;
`

export const ImageText = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 450;
  font-family: 'Roboto';
`

export const Button = styled.button`
  color: #e2e8f0;
  border: none;
  font-size: 18px;
  font-weight: 450;
  padding: 10px 20px;
  background-color: #06b6d4;
  border-radius: 5px;
  cursor: pointer;
`
