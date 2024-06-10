import Card from "../../components/Card"
import Banner from "../../components/Banner"
import BannerImage from "../../assets/images/titleBackground.png"
import data from '../../assets/cardList.json'
import { Link } from "react-router-dom"

function Home () {
    return (
        <main className="home">
            <div className= "bannerContainer">
                <Banner image={BannerImage}/>
                <div className= "title">
                    <h1><span>Chez vous, </span>partout et ailleurs</h1>
                </div>
            </div>
            <div className="cardContainer">
                {data.map((element) => (
                    <Link to={`/lodging/${element.id}`} key = {element.id}>
                        <Card
                            title = {element.title}
                            cover = {element.cover}
                        /> 
                    </Link>
                )
                )}  
            </div>
        </main>
    )
}

export default Home 