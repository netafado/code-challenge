import { useArtBoards } from 'hooks'
import * as S from './style'
import { useRouter } from 'next/router'
const Artboard = () => {
  const { artboards } = useArtBoards()
  const router = useRouter()
  const { id } = router.query
  const current = artboards[parseInt(id!)]
  if (!current) return null
  return (
    <S.Wrraper>
      <figure
        style={{ backgroundImage: `url(${current.files[0].url})` }}
      ></figure>
    </S.Wrraper>
  )
}

export default Artboard
