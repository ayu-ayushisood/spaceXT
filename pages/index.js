import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Filter from '../components/Filter'
import SpaceCards from '../components/SpaceCards'

const Index = (props) => (
    <Layout>
        <div>SpaceX Launch Programs</div>
        <Filter />
        <SpaceCards data={props.data} />
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('https://api.spacexdata.com/v3/launches?limit=100.json');
    const data = await res.json();

    return {
        data: data
    }
}
export default Index;