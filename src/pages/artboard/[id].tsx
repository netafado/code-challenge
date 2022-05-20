import { FC } from 'react'
import Layout from '@components/layout'
import Artboard from '@components/artboard'
type HomeProps = {
  title: string
}

const Home: FC<HomeProps> = () => {
  return (
    <Layout>
      <Artboard />
    </Layout>
  )
}

export default Home
