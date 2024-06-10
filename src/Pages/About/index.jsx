import AboutImage from '../../assets/images/aboutBackground.png'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import aboutList from '../../assets/aboutList.json'

function About () {
    return (
        <main className="about">
            <Banner image={AboutImage} alt="Paysage de montagne"/>
            {aboutList.map((element) => (
                <Collapse title={element.title} id={element.id} content={element.content} key={`${element.title}-${element.id}`}/>
            ))}
        </main>
    )
}

export default About