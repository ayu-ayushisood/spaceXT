import React from 'react'

import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Filter from '../components/Filter'
import SpaceCards from '../components/SpaceCards'
import DevInfo from '../components/DevInfo'

class Index extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            data: ''
        }

    }

    componentDidMount(){
       this.loadItems();
    }

    async loadItems(){
        const res = await fetch('https://api.spacexdata.com/v3/launches?limit=100');
        const data = await res.json();
    
        this.setState({data: data})
    }

    filteredData = (data) => {
        this.setState({data: data})
    }

    render(){
        return(
            <Layout>
                <h2>SpaceX Launch Programs</h2>
                {this.state.data && 
                    <div style={{display: 'flex'}}>
                        <Filter filteredData = {this.filteredData} />
                    <SpaceCards data={this.state.data} />
                </div>}
                <DevInfo />
            </Layout>
        )
    }
}
export default Index;