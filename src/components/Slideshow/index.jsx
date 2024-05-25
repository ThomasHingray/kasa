import { useState, useEffect } from "react"


function Slideshow ({pictures}) {
    
    const [nextPicture, setNextPicture] = useState(0)
    // const [currentPicture, setCurrentPicture] = useState(0)


    // // useEffect(() => {
    // //     if (nextPicture > currentPicture) {
            
    // //     }
    // // }, [nextPicture])

    // onClick={setNextPicture(nextPicture-1)}
    // onClick={setNextPicture(nextPicture+1)}

    return (
        <div className="sliderContainer">
            <div className="sliderViewport">
        
                {pictures.map((picture, index) => (
                    <img className="sliderContent" src={picture} alt="photos" key={`Photo-${index}`}/>
                ))}

                
            </div>
            {pictures.length > 1 ? 
                <div>
                    <i className="fa-solid fa-angle-left" />
                    <i className="fa-solid fa-angle-right" />
                </div> : ""}
            {pictures.length > 1 ? <p>{`${nextPicture+1}/${pictures.length}`}</p>:""}
        </div>
    )
}

export default Slideshow