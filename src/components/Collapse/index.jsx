import { useEffect, useState } from 'react'

function Collapse ({title, id, content}) {
    const [isCollapse, setIsCollapse] = useState("")


    // Au click, on toggle la visibilité du contenu des collapse 
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

    // Au click, on toggle la rotation de la flèche
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
        <div className='collapseWrapper' >
        
            <div className="collapseElement">
                <div className="collapseHeader">
                    {title}
                    <i className="fa-solid fa-angle-up" id={id}
                        onClick = {(e) => setIsCollapse(e.target.id)}>
                    </i>
                </div>
                <div className="collapseContent inactive">
                    {Array.isArray(content) ? (
                        content.map((element, index) => (
                            <p key={index}>{element}</p>
                        ))) : (
                        <p>{content}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Collapse