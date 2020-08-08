import React from 'react'
import styles from './Filter.module.css'

class Filter extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            launch_success: false,
            land_success: false,
            launch_year: 0
        }

    }

    async componentDidUpdate(prevState, newState){
        if(prevState!==newState){
            let url = this.state.launch_year > 0 ? `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${this.state.launch_success}&land_success=${this.state.land_success}&launch_year=${this.state.launch_year}` : `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${this.state.launch_success}&land_success=${this.state.land_success}` 
            const res = await fetch(url);
            const data = await res.json();
        
            this.props.filteredData(data);
        }
    }

    
    render(){
        return(
        <div className={styles.filterContainer}>
            <h4>Filters</h4>
            <p className={styles.filterHead}>Launch Year</p>
            <div >
                <div className={styles.btnContainer}>
                    <div className={styles.btn} tabIndex="1" onClick={ () => {this.setState({launch_year: 2006})} }>2006</div>
                    <div className={styles.btn} tabIndex="2" onClick={ () => {this.setState({launch_year: 2007})} }>2007</div>
                </div>
                <div className={styles.btnContainer}>
                    <div className={styles.btn} tabIndex="3" onClick={ () => {this.setState({launch_year: 2008})} }>2008</div>
                    <div className={styles.btn} tabIndex="4" onClick={ () => {this.setState({launch_year: 2009})} }>2009</div>
                </div>
                <div className={styles.btnContainer}>
                    <div className={styles.btn} tabIndex="5" onClick={ () => {this.setState({launch_year: 2010})} }>2010</div>
                    <div className={styles.btn} tabIndex="6" onClick={ () => {this.setState({launch_year: 2011})} }>2011</div>
                </div>
                <div className={styles.btnContainer}>
                    <div className={styles.btn} tabIndex="7" onClick={ () => {this.setState({launch_year: 2012})} }>2012</div>
                    <div className={styles.btn} tabIndex="8" onClick={ () => {this.setState({launch_year: 2013})} }>2013</div>
                </div>
                <div className={styles.btnContainer}>
                    <div className={styles.btn} tabIndex="9" onClick={ () => {this.setState({launch_year: 2014})} }>2014</div>
                    <div className={styles.btn} tabIndex="10" onClick={ () => {this.setState({launch_year: 2015})} }>2015</div>
                </div>
                <div className={styles.btnContainer}>
                    <div className={styles.btn} tabIndex="11" onClick={ () => {this.setState({launch_year: 2016})} }>2016</div>
                    <div className={styles.btn} tabIndex="12" onClick={ () => {this.setState({launch_year: 2017})} }>2017</div>
                </div>
                <div className={styles.btnContainer}>
                    <div className={styles.btn} tabIndex="13" onClick={ () => {this.setState({launch_year: 2018})} }>2018</div>
                    <div className={styles.btn} tabIndex="14" onClick={ () => {this.setState({launch_year: 2019})} }>2019</div>
                </div>
                <div className={styles.btnContainer}>
                    <div className={styles.btn} tabIndex="15" onClick={ () => {this.setState({launch_year: 2020})} }>2020</div>
                </div>
            </div>
            <p className={styles.filterHead}>Successful Launch</p>
            <div className={styles.btnContainer}>
                <div className={styles.btn} tabIndex="16" onClick={ () => {this.setState({launch_success: true})} }>True</div>
                <div className={styles.btn} tabIndex="17" onClick={ () => {this.setState({launch_success: false})} }>False</div>
            </div>
            <p className={styles.filterHead}>Successful Landing</p>
            <div className={styles.btnContainer}>
                <div className={styles.btn} tabIndex="18" onClick={ () => {this.setState({land_success: true})} } >True</div>
                <div className={styles.btn} tabIndex="19" onClick={ () => {this.setState({land_success: false})} } >False</div>
            </div>
        </div>
        )
    }
}

export default Filter