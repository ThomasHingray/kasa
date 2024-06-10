import Rating from "../Rating"

function Information({title,location,tags,name,picture,rating}) {

    const identity = name.split(" ")
    
return (
        <div className="information">
            <div className="lodgeInformation">
                <h1>{title}</h1>
                <h2>{location}</h2>
                <ul>
                    {tags.map((tag,index) => (
                        <li key={index}>{tag}</li>
                    ))}
                </ul>
            </div>
            <div className="hostInformation">
                <div className="host">
                    <div className = "name">
                        {identity.map((element, index) => (
                            <h3 key={index}>{element}</h3>
                        ))}
                    </div>
                    <img src={picture} alt="profile"/>
                </div>
                <div className="rating">
                    <Rating rating={rating}/>
                </div>
            </div>
        </div>
    )
}

export default Information
