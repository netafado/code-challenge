import { FC } from 'react'

type HomeProps = {
  title: string
}

const Home: FC<HomeProps> = ({ title = 'Addi' }) => {
  return <div>{title}</div>
}

export default Home
