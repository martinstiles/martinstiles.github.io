import React from 'react'
import "./project.style.scss"
import NewTab from "../../static/new_tab.svg"
import Tags from "../common/tags/tags"
import ClusteringVizualiser from "../../static/project_img/clusteringVisualizer.gif"
import StreamlitApp from "../../static/project_img/streamlitApp.png"
import PathfindingVizualiser from "../../static/project_img/pathfindingVisualizer.gif"
import SortingVizualiser from "../../static/project_img/sortingVisualizer.gif"

const Project = ({ name, description, link, tags }) => {
    const nameToImgMap = {
        "Clustering Visualizer": ClusteringVizualiser,
        "Streamlit Application": StreamlitApp,
        "Pathfinding Visualizer": PathfindingVizualiser,
        "Sorting Visualizer": SortingVizualiser
    }

    return (
        <div className="project-container">
            <div className="project-image-container">
                <img src={nameToImgMap[name]} alt="" className="project-image" />
                {
                    link &&
                    <a href={link} target="_blank" rel="noreferrer" className="see-project-button"> <h3> See project </h3> <img src={NewTab} alt="" /> </a>
                }
            </div>
            <div className="text-and-tags-container">
                <h2> {name.toUpperCase()} </h2>
                <p> { description } </p>
                <Tags tags={tags} useRandomColors={true}/>
            </div>
        </div>
    )
}

export default Project
