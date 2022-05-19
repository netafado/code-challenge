import * as S from './style'
import logoImage from '@assets/sketch-logo.svg'
const Header = () => {
  console.log(logoImage)
  return (
    <S.Wrraper>
      <S.Logo src={logoImage.src} />
      <S.Title>Document</S.Title>
    </S.Wrraper>
  )
}

export default Header
