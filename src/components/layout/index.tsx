import Header from './header'
import Footer from './footer/Footer'
import { FC } from 'react'
import * as S from './style'
type LayoutProps = {
  children: React.ReactNode
}
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <S.Wrraper>
        <S.MainContainer>{children}</S.MainContainer>
      </S.Wrraper>
      <Footer />
    </>
  )
}

export default Layout
