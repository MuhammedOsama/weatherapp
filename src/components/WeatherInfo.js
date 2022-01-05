import React from 'react';

// style
import './styles/WeatherInfo.scss';

export default function WeatherInfo(props) {
    return <div className='info'>
        {props.city && <p>City: {props.city}</p>}
        {props.country && <p>Country: {props.country}</p>}
        {props.temperature && <p>Temperature: {props.temperature}</p>}
        {props.humidity && <p>Humidity: {props.humidity}</p>}
        {props.description && <p>Description: {props.description}</p>}
        {props.error && <p className='error'>{props.error}</p>}
    </div>
}
