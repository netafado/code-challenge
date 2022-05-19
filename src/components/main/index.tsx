import { FC } from 'react'

type MainProps = {
  title: string
}

const Main: FC<MainProps> = ({ title = 'Addi' }) => {
  return <h1>{title}</h1>
}

export default Main
