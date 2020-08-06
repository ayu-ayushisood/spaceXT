const Card = (props) => (
        <div style={{padding: '5px'}}>
            <div className="card" style={{width: '12rem'}}>
                <div><img src={props.image} className="card-img-top" alt="spaceX" /></div>
                <div className="card-body">
                    <h5 className="card-title">{props.name} #{props.id}</h5>
                    <p className="card-text">Mission Ids:</p>
                    { props.mission_ids.length > 0 ? props.mission_ids.map((mission_id, ind) => {
                        return(
                            <ul key={ind}>
                                <li>{mission_id}</li>
                            </ul>
                        )
                    }) : <p>N/A</p>
                    }
                    <p className="card-text">Launch year: {props.year}</p>
                    <p className="card-text">Successful Launch: {props.launch_success ? 'True' : 'False'}</p>
                    <p className="card-text">Successful Landing: {props.landingStatus}</p>
                </div>
            </div>
        </div>
)
export default Card