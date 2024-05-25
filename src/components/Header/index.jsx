import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

function Header () {
    return (
        <header>
            <img src={Logo} alt="logo Kasa"/>
            <nav>
                <Link className="navLink" to="/">Accueil</Link>
                <Link className="navLink" to="/about">A propos</Link>
            </nav>
        </header>
    )
}

export default Header