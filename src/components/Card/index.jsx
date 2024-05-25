function Card ({title, cover}) {
    return (
        <div className="card">
            <img src={cover} alt={title}/>
            <div className="cardTitle">
                <h2>{title}</h2>
            </div>
        </div>
    )
}

export default Card