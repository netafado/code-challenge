import { FC } from 'react'
import { useArtBoards } from 'hooks'
import * as S from './style'
import Link from 'next/link'

type ArtboardListProps = {
  title: string
}

import { Artboard } from 'hooks'

const ArtboardList: FC<ArtboardListProps> = () => {
  const { artboards } = useArtBoards()

  return (
    <S.Wrraper>
      {artboards.map((artboards: Artboard, index) => {
        return (
          <Link href={`/artboard/${index}`} key={artboards.name} tab-index="0">
            <S.Col>
              <S.ImgWrraper>
                <figure>
                  <S.ImgArtBoard
                    src={artboards.files[0].thumbnails[0].url}
                    alt={artboards.name}
                  />
                </figure>
              </S.ImgWrraper>
              <figcaption>{artboards.name}</figcaption>
            </S.Col>
          </Link>
        )
      })}
    </S.Wrraper>
  )
}

export default ArtboardList
