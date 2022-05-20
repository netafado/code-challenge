import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  Dispatch
} from 'react'
import { useQuery } from '@apollo/client'

import { GET_ARTBOARDS } from '../graphql'

export type File = {
  height: number
  width: number
  url: string
  thumbnails: File[]
}

export type Artboard = {
  files: File[]
  isArtboard: boolean
  name: string
}

export type ArtBoardsContextData = {
  loading: boolean
  artboards: Artboard[]
  currentArtBoard?: Artboard
  setCurrentArtBoard?: Dispatch<React.SetStateAction<undefined>>
}

export const ArtBoardsContext = createContext<ArtBoardsContextData>({
  artboards: [],
  currentArtBoard: undefined,
  loading: false
})

export type ArtBoardsProviderProps = {
  children: React.ReactNode
}

const ArtboarsProvider: React.FC<ArtBoardsProviderProps> = ({ children }) => {
  const { loading, data } = useQuery(GET_ARTBOARDS, {
    variables: { id: 'e981971c-ff57-46dc-a932-a60dc1804992' }
  })
  const [artboards, setArtboards] = useState([])
  const [currentArtBoard, setCurrentArtBoard] = useState(undefined)

  useEffect(() => {
    if (!data) return
    setArtboards(data.share.version.document.artboards.entries)
  }, [artboards, data])
  return (
    <ArtBoardsContext.Provider
      value={{
        artboards,
        loading,
        currentArtBoard,
        setCurrentArtBoard
      }}
    >
      {children}
    </ArtBoardsContext.Provider>
  )
}

const useArtBoards = () => useContext(ArtBoardsContext)

export { ArtboarsProvider, useArtBoards }
