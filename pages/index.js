import Fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Filter from '../components/Filter'
import SpaceCard from '../components/SpaceCard'

const Index = () => (
    <Layout>
        <Filter />
        <SpaceCard />
    </Layout>
)
export default Index