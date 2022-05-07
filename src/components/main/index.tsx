import { FC } from 'react'

type MainProps = {
  title: string
}

const Main: FC<MainProps> = ({ title = 'Addi' }) => {
  return <h2>{title}</h2>
}

export default Main
