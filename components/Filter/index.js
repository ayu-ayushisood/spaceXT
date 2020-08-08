import styles from './Filter.module.css'

const loadLaunched = async function(props) {
    const res = await fetch('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true');
    const data = await res.json();

    props.filteredData(data);
    
}

const loadLanded = async function(props) {
    const res = await fetch('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true');
    const data = await res.json();

    props.filteredData(data);
    
}

const Filter = (props) => (
    <div className={styles.filterContainer}>
        <h4>Filters</h4>
        <p>Launch Year</p>
        <div >
            <div className={styles.btnContainer}>
                <button type="button" className={styles.btn} >2006</button>
                <button type="button" className={styles.btn} >2007</button>
            </div>
            <div className={styles.btnContainer}>
                <button type="button" className={styles.btn} >2008</button>
                <button type="button" className={styles.btn} >2009</button>
            </div>
            <div className={styles.btnContainer}>
                <button type="button" className={styles.btn} >2010</button>
                <button type="button" className={styles.btn} >2011</button>
            </div>
            <div className={styles.btnContainer}>
                <button type="button" className={styles.btn} >2012</button>
                <button type="button" className={styles.btn} >2013</button>
            </div>
            <div className={styles.btnContainer}>
                <button type="button" className={styles.btn} >2014</button>
                <button type="button" className={styles.btn} >2015</button>
            </div>
            <div className={styles.btnContainer}>
                <button type="button" className={styles.btn} >2016</button>
                <button type="button" className={styles.btn} >2017</button>
            </div>
            <div className={styles.btnContainer}>
                <button type="button" className={styles.btn} >2018</button>
                <button type="button" className={styles.btn} >2019</button>
            </div>
            <div className={styles.btnContainer}>
                <button type="button" className={styles.btn} >2020</button>
            </div>
        </div>
        <h5>Successful Launch</h5>
        <div className={styles.btnContainer}>
            <button type="button" className={styles.btn} onClick={ () => loadLaunched(props) }>True</button>
            <button type="button" className={styles.btn} >False</button>
        </div>
        <h5>Successful Landing</h5>
        <div className={styles.btnContainer}>
            <button type="button" className={styles.btn} onClick={ () => loadLanded(props) } >True</button>
            <button type="button" className={styles.btn} >False</button>
        </div>
    </div>
)

export default Filter