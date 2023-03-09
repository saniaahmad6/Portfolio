import "./ProjectCardStyles.css"
import {NavLink} from "react-router-dom"

function EachCard(props){
    return <>
        <div className="Project-card">
                    <img src={props.imgsrc} alt={props.alt} />
                    <h2 className="project-title">
                        {props.title}
                    </h2>
                    <div className="pro-details">
                        <p>{props.text}</p>
                    </div>
                    <div className="pro-btns">
                        <NavLink to={props.view} className="btn">View</NavLink>
                        <NavLink to={props.source} className="btn">Source</NavLink>
                    </div>
        </div>
    </>
}

export default EachCard;