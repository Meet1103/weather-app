import React, { Component } from "react"
import Title from "./Components/Title"
import Form from "./Components/Form"
import Description from "./Components/Description"
import "./App.css"
  
class App extends Component {

  state = {
    city : undefined,
    country : undefined,
    temperature : undefined,
    icon : undefined,
    description : undefined,
    error : undefined
  }


  getWeather = async (e) => {

    e.preventDefault()

    const api = process.env.REACT_APP_API

    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
      
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api}&units=metric`);
    const data = await response.json();
  
    this.setState({
      city : data.name,
      country : data.sys.country,
      temperature : data.main.temp,
      humidity : data.main.humidity,
      icon : data.weather[0].icon,
      description : data.weather[0].description,
      error : undefined
    })
}


  render() {
    return (
      <div className="Main">
          <div className="title">
            <Title />
          </div>
          <div className="form" >
            <Form getWeather={this.getWeather} />
          </div>
          <div className="description">
            <Description
            city={this.state.city}
            country={this.state.country}
            temperature={this.state.temperature}
            humidity={this.state.humidity}
            icon={this.state.icon}
            description={this.state.description}
            /> 
          </div>
      </div>
    )
  }
}

export default App
