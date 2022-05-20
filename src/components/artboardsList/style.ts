import styled from 'styled-components'

export const Wrraper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

export const Col = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media (max-width: 800px) {
    width: 33.33%;
  }
  @media (max-width: 480px) {
    width: 50%;
  }
`

export const ImgWrraper = styled.div`
  width: 100%;
  flex: 1;
  justify-content: center;
  display: flex;
  align-items: center;
`

export const ImgArtBoard = styled.img`
  width: 100%;
`
