
function Rating ({rating}) {
    
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