import Slideshow from "../../components/Slideshow"
import data from "../../assets/cardList.json"
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"

function Lodging () {
    const cardId = useParams()
    const [pictures, setPictures] = useState([])

    useEffect(() => {
    const targetElement = data.find((element) => element.id === cardId.id);
    if (targetElement) {
        setPictures(targetElement.pictures);
    }
    }, [cardId])
   
    return (
        <main>
            <Slideshow pictures={pictures}/>
            <div>
                informations
                <div>
                    <h1>Loft</h1>
                    <h2>Paris</h2>
                    <ul>
                        <li>
                            Tag 1
                        </li>
                        <li>
                            Tag 2
                        </li>
                        <li>
                            Tag 3
                        </li>
                    </ul>
                </div>
                <div>
                    Propriétaire
                </div>
            </div>
            <div>
                Menus déroulants
            </div>
        </main>
    )
}

export default Lodging