import React from 'react'
import "./projectNavButtons.style.scss"
import { useNavigate } from "react-router-dom";
import RightArrow from "../../../static/arrow_right.svg"
import LeftArrow from "../../../static/arrow_left.svg"

const ProjectNavButtons = ({ projectIndex, setProjectIndex, numProjects }) => {
    const navigate = useNavigate()

    const leftClick = () => {
        if (projectIndex <= 1) return
        navigate(`/projects/${projectIndex - 1}/`)
        setProjectIndex(projectIndex - 1)
    }

    const rightClick = () => {
        if (projectIndex >= numProjects) return
        navigate(`/projects/${projectIndex + 1}/`)
        setProjectIndex(projectIndex + 1)
    }

    const leftButtonStyle = projectIndex === 1 ? "inactive-button" : "active-button"
    const rightButtonStyle = projectIndex === numProjects ? "inactive-button" : "active-button"

    return (
        <div className="button-group">
            <button onClick={() => leftClick()} className={leftButtonStyle}> <img src={LeftArrow} alt="" /> </button>
            <button onClick={() => rightClick()} className={rightButtonStyle}> <img src={RightArrow} alt="" /> </button>
        </div>
    )
}

export default ProjectNavButtons
