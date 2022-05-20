import * as S from './style'
import Logo from 'svgs/logo'
import { BreadCrumbs, ArrowLeft, ArrowRight, Close } from 'svgs'
import { useArtBoards } from 'hooks'
import { useRouter } from 'next/router'
const Header = () => {
  const { artboards } = useArtBoards()
  const router = useRouter()
  const { id } = router?.query as unknown as string

  if (!artboards) return null

  const goBackToArtBoards = () => {
    router.push('/')
  }
  const goTo = () => {
    const page = parseInt(id) + 1
    router.push(`/artboard/${page}`)
  }
  const goBack = () => {
    const page = parseInt(id) - 1
    router.push(`/artboard/${page}`)
  }
  return (
    <S.Wrraper>
      {!id ? (
        <Logo />
      ) : (
        <>
          <S.ArtboardControl aria-label="breadcrumb">
            <S.CloseButton
              onClick={goBackToArtBoards}
              aria-label="close button"
            >
              <Close />
            </S.CloseButton>
            <S.Button
              aria-label="go to previous artboard"
              onClick={goBack}
              disabled={id == '0'}
            >
              <ArrowLeft />
            </S.Button>
            <span aria-current="page">{parseInt(id) + 1}</span>
            <BreadCrumbs />
            <span>{artboards.length}</span>
            <S.Button
              onClick={goTo}
              aria-label="go to next artborad"
              disabled={id == artboards.length - 1}
            >
              <ArrowRight />
            </S.Button>
          </S.ArtboardControl>
          <S.titleWrapper>
            <S.Title>{artboards[id].name}</S.Title>
          </S.titleWrapper>
        </>
      )}
    </S.Wrraper>
  )
}

export default Header
