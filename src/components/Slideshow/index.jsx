import { useState, useEffect } from "react"


function Slideshow ({pictures}) {
    
    const [nextPicture, setNextPicture] = useState(0)

    const handleNext = () => {
        setNextPicture((next) => (next + 1) % pictures.length);
    };

    const handlePrev = () => {
        setNextPicture((next) => (next - 1 + pictures.length) % pictures.length);
    };
    
    useEffect(() => {
        const slider = document.querySelector(".slider")
        slider.setAttribute("style", `transform:translatex(-${nextPicture}0%`)
    }, [nextPicture])

    
    return (
        <div className="sliderContainer">
            <div className="sliderViewport">
                <div className="slider">
                    {pictures.map((picture, index) => (
                        <img className="sliderContent" src={picture} alt="photos" key={`Photo-${index}`}/>
                    ))}

                </div>  
            </div>
            {pictures.length > 1 ? 
                <div>
                    <i className="fa-solid fa-angle-left" 
                        onClick={handlePrev}/>
                    <i className="fa-solid fa-angle-right" 
                        onClick={handleNext}/>
                </div> : ""}
            {pictures.length > 1 ? <p>{`${nextPicture+1}/${pictures.length}`}</p>:""}
        </div>
    )
}

export default Slideshow