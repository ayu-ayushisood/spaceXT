import styles from './Card.module.css'

const Card = (props) => (
        <div className={styles.card} >
            <div style={{padding: '1rem'}}>
                <div><img src={props.image} className="card-img-top" alt="spaceX" style={{backgroundColor: '#ededed'}} /></div>
                <div className="card-body">
                    <h5 className={styles.cardTitle}>{props.name} #{props.id}</h5>
                    <p className={styles.subtitle}>Mission Ids:</p>
                    { props.mission_ids.length > 0 ? props.mission_ids.map((mission_id, ind) => {
                        return(
                            <ul key={ind} className={styles.info}>
                                <li>{mission_id}</li>
                            </ul>
                        )
                    }) : <p className={styles.info}>N/A</p>
                    }
                    <p className={styles.info}><span className={styles.subtitle}>Launch year: </span>{props.year}</p>
                    <p className={styles.info}><span className={styles.subtitle}>Successful Launch: </span> {props.launch_success ? 'True' : 'False'}</p>
                    <p className={styles.info}><span className={styles.subtitle}>Successful Landing: </span> {props.landingStatus ? 'True' : 'False'}</p>
                </div>
            </div>
        </div>
)
export default Card