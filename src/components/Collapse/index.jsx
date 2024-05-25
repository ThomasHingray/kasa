import aboutList from '../../assets/aboutList.json'
import { useEffect, useState } from 'react'

function Collapse () {
    const [isCollapse, setIsCollapse] = useState("")
    
    useEffect (() => {
        const collapseContent = document.querySelectorAll(".collapseContent")
        
        for(let i=0; i<collapseContent.length; i++) {

            if (i === parseInt(isCollapse)) {
                collapseContent[i].classList.contains("inactive")?
                    collapseContent[i].classList.remove("inactive"):
                    collapseContent[i].classList.add("inactive")
            }
            }
    }, [isCollapse])

    useEffect (() => {
        const collapseButton = document.querySelectorAll(".fa-angle-up")

        for(let i=0; i<collapseButton.length; i++) {

            if (i === parseInt(isCollapse)) {
                collapseButton[i].classList.contains("rotate")?
                    collapseButton[i].classList.remove("rotate"):
                    collapseButton[i].classList.add("rotate")
            }
        }
        setIsCollapse("")
    }, [isCollapse])

    return (
        <div className='collapseWrapper'>
        {aboutList.map((element) => (
            <div className="collapseElement" key={element.title}>
                <div className="collapseHeader">
                    {element.title}
                    <i className="fa-solid fa-angle-up" id={element.id}
                        onClick = {(e) => setIsCollapse(e.target.id)}>
                    </i>
                </div>
                <div className="collapseContent inactive">
                    {element.content}
                </div>
            </div>
        ))}
        </div>
    )
}

export default Collapse