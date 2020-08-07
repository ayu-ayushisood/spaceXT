import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Filter from '../components/Filter'
import SpaceCards from '../components/SpaceCards'
import DevInfo from '../components/DevInfo'

const Index = (props) => (
    <Layout>
        <h2>SpaceX Launch Programs</h2>
        <div style={{display: 'flex'}}>
            <Filter />
            <SpaceCards data={props.data} />
        </div>
        <DevInfo />
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