import Slideshow from "../../components/Slideshow"
import data from "../../assets/cardList.json"
import { useParams, useNavigate } from "react-router-dom"
import { useState,useEffect } from "react"
import Collapse from "../../components/Collapse"
import Information from "../../components/Information"

function Lodging () {
    const {id} = useParams()
    const [lodgeData, setLodgeData] = useState(null)
    const [pictures, setPictures] = useState([])
    const navigate = useNavigate()

    // En cas de cible éronnée, navigate renvoie vers la page d'erreur

    useEffect(() => {
        const targetElement = data.find((element) => element.id === id);
        if (targetElement) {
            setLodgeData(targetElement)
            setPictures(targetElement.pictures)
        } else {
            navigate('/error')
        }
    }, [id, navigate])

    if(!lodgeData) {
        return <div>Loading ...</div>
    }
   
    return (
        <main>
            <Slideshow pictures={pictures}/>
            <Information 
                title={lodgeData.title} 
                location={lodgeData.location} 
                tags={lodgeData.tags} 
                name={lodgeData.host.name}
                picture={lodgeData.host.picture}
                rating={lodgeData.rating}/>
            <div className="lodgingCollapse">
                <Collapse className="collapse" title="Description" id= "0" content={lodgeData.description}/>
                <Collapse className="collapse" title="Equipements" id= "1" content={lodgeData.equipments}/>
            </div>
        </main>
    )
}

export default Lodging