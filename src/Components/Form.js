import React from "react";
import "./Form.css"

const Form = (props) => {
    return(
            <form className="Form" onSubmit={props.getWeather} autoComplete="off">
                <div className="wrapper">
                    <input className="inputs" type="text" name="city" placeholder="City" required/>
                    <br /> <br/>
                    <input className="inputs" type="text" name="country" placeholder="Country" required/>
                    <br /> <br/>
                    <input type="submit" value="Get Weather" className="button" />
                </div>
            </form>
    )
}
export default Form;