import styled from 'styled-components'

export const Wrraper = styled.div`
  width: 100%;
  display: flex;
  height: calc(100vh - 45px);
  justify-content: center;
  align-items: center;
  padding: 20px;
  figure {
    padding: 20px;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    img {
      width: auto;
      max-width: 100%;
      height: 100%;
    }
  }
`
