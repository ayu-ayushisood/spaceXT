
import styles from './Filter.module.css'

// const loadLanded = async function(props) {
//     const res = await fetch('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true');
//     const data = await res.json();

//     props.filteredData(data);
    
// }

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
            <p>Launch Year</p>
            <div >
                <div className={styles.btnContainer}>
                    <button type="button" className={styles.btn} onClick={ () => {this.setState({launch_year: 2006})} }>2006</button>
                    <button type="button" className={styles.btn} onClick={ () => {this.setState({launch_year: 2007})} }>2007</button>
                </div>
                <div className={styles.btnContainer}>
                    <button type="button" className={styles.btn} onClick={ () => {this.setState({launch_year: 2008})} }>2008</button>
                    <button type="button" className={styles.btn} onClick={ () => {this.setState({launch_year: 2009})} }>2009</button>
                </div>
                <div className={styles.btnContainer}>
                    <button type="button" className={styles.btn} onClick={ () => {this.setState({launch_year: 2010})} }>2010</button>
                    <button type="button" className={styles.btn} onClick={ () => {this.setState({launch_year: 2011})} }>2011</button>
                </div>
                <div className={styles.btnContainer}>
                    <button type="button" className={styles.btn} onClick={ () => {this.setState({launch_year: 2012})} }>2012</button>
                    <button type="button" className={styles.btn} onClick={ () => {this.setState({launch_year: 2013})} }>2013</button>
                </div>
                <div className={styles.btnContainer}>
                    <button type="button" className={styles.btn} onClick={ () => {this.setState({launch_year: 2014})} }>2014</button>
                    <button type="button" className={styles.btn} onClick={ () => {this.setState({launch_year: 2015})} }>2015</button>
                </div>
                <div className={styles.btnContainer}>
                    <button type="button" className={styles.btn} onClick={ () => {this.setState({launch_year: 2016})} }>2016</button>
                    <button type="button" className={styles.btn} onClick={ () => {this.setState({launch_year: 2017})} }>2017</button>
                </div>
                <div className={styles.btnContainer}>
                    <button type="button" className={styles.btn} onClick={ () => {this.setState({launch_year: 2018})} }>2018</button>
                    <button type="button" className={styles.btn} onClick={ () => {this.setState({launch_year: 2019})} }>2019</button>
                </div>
                <div className={styles.btnContainer}>
                    <button type="button" className={styles.btn} onClick={ () => {this.setState({launch_year: 2020})} }>2020</button>
                </div>
            </div>
            <h5>Successful Launch</h5>
            <div className={styles.btnContainer}>
                <button type="button" className={styles.btn} onClick={ () => {this.setState({launch_success: true})} }>True</button>
                <button type="button" className={styles.btn} onClick={ () => {this.setState({launch_success: false})} }>False</button>
            </div>
            <h5>Successful Landing</h5>
            <div className={styles.btnContainer}>
                <button type="button" className={styles.btn} onClick={ () => {this.setState({land_success: true})} } >True</button>
                <button type="button" className={styles.btn}onClick={ () => {this.setState({land_success: false})} } >False</button>
            </div>
        </div>
        )
    }
}

export default Filter