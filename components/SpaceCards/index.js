import Card from '../Card'
import styles from './SpaceCards.module.css'

const SpaceCards = (props) => (
        <div >
            <div className={styles.spaceCards}>
                {console.log("data:", props.data)}
                {
                    props.data.map((element, ind) => {
                        return(
                            <Card 
                                key={element.flight_number}
                                image={element.links.mission_patch_small}
                                name={element.mission_name}
                                id={element.flight_number}
                                mission_ids={element.mission_id}
                                year={element.launch_year}
                                launch_success={element.launch_success}
                                landingStatus={element.launch_landing}
                            />
                        )
                    })
                }
            </div>    
       </div>
)
export default SpaceCards