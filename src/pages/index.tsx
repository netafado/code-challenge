import { FC } from 'react'
import Layout from '../components/layout'
import ListArtboard from '@components/artboardsList'
type HomeProps = {
  title: string
}

const Home: FC<HomeProps> = () => {
  return (
    <Layout>
      <ListArtboard title={''} />
    </Layout>
  )
}

export default Home
