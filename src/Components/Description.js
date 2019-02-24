import React from "react";
import "./Description.css"

const Description = ({city ,country ,temperature ,humidity ,icon ,description ,error}) => {

    const img = icon

    return(
        <div className="results">
            {city && country && <p>~  Location : {city},{country}</p>}
            {temperature && <p>~  Temperature : {temperature}</p>}
            {humidity && <p>~  Humidity : {humidity}</p>}
            {description && <p>~  Description : {description}</p>}
            {icon && <img src={`http://openweathermap.org/img/w/${img}.png`} alt="icon" />}
            {error && <p>~  {error}</p>}
        </div>
    )
}

export default Description;