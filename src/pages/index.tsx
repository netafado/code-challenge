import { FC } from 'react'
import Layout from '../components/layout'
type HomeProps = {
  title: string
}

const Home: FC<HomeProps> = ({ title = 'Addi' }) => {
  return (
    <Layout>
      <div>{title}</div>
    </Layout>
  )
}

export default Home
