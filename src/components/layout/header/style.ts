import styled from 'styled-components'

export const Wrraper = styled.header`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: start;
  padding: 10px 10px;
  box-shadow: 2px 2px 3px #ede5e5;
`

export const Logo = styled.img`
  width: 25px;
  height: 25px;
`

export const CloseButton = styled.button`
  margin-right: 10px;
`

export const Button = styled.button`
  padding: 0 4px;
`

export const ArtboardControl = styled.nav`
  display: flex;
  color: black;
  width: 33%;
  opacity: 0.4;
  font-size: 1.2rem;
  line-height: 1;
  padding-top: 5px;
  padding-bottom: 0;
  span {
    padding: 0 3px;
  }
`

export const Title = styled.h1`
  font-size: 16px;
  line-height: 0.7;
  font-weight: bolder;
  color: black;
  margin-bottom: 0;
  margin-top: 4px;
`
