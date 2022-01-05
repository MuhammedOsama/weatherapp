import React, {Component} from 'react';

// components
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            country: '',
            temperature: '',
            humidity: '',
            description: '',
            error: '',
        }
    }

    getWeather = async e => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const API_KEY = 'e36ed364400282e43250b6c4c0274d44';
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`;
        const api = await fetch(URL);
        const data = await api.json();
        if (city && country) {
            this.setState({
                city: data.name,
                country: data.sys.country,
                temperature: data.main.temp,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: '',
            });
        } else {
            this.setState({
                city: '',
                country: '',
                temperature: '',
                humidity: '',
                description: '',
                error: 'Please enter data.',
            });
        }
    }

    render() {
        return <div className="App">
            <div className="form-container">
                <WeatherForm getWeather={this.getWeather}/>
                <WeatherInfo
                    city={this.state.city}
                    country={this.state.country}
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                />
            </div>
        </div>
    }
}
