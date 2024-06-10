
function Rating ({rating}) {


    // On crée un tableau de 5 étoiles, et on en colore le nombre demandé en rouge
    const parsedRating = parseInt(rating)

    return (
        <div>
            {Array.from({length : 5}, (v,i) => (
                <i 
                key={i}
                className={`fa-solid fa-star ${i < parsedRating ? 'red' : ''}`}/>
            ))}
        </div>
    )
}

export default Rating