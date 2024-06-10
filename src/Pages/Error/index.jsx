import { Link } from "react-router-dom"

function Error () {
    return (
        <main className="error">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <div >
                <Link  className='indexLink' to='/'>Retourner sur la page d'accueil</Link>
            </div>
        </main>
    )
}

export default Error