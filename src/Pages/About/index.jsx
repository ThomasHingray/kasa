import AboutImage from '../../assets/images/aboutBackground.png'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'

function About () {
    return (
        <main>
            <Banner image={AboutImage} alt="Paysage de montagne"/>
            <Collapse/>
        </main>
    )
}

export default About