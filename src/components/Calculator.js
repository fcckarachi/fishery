import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';

export default class Calculator extends Component {

    constructor() {
        super();
        this.state = {
            temperature : '',
            currentScale :'c'
        };
    }

    handleCelsiusChange(pTemperature){
       // console.log('hello')
        this.setState({currentScale  : 'c',temperature : pTemperature});
    }

    handleFahrenhietChange(pTemperature){
        this.setState({currentScale  : 'f',temperature : pTemperature});
    }

    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    render() {
        let currentScale = this.state.currentScale;
        let temperature = this.state.temperature;
        let celsius = currentScale === 'f' ? this.tryConvert(temperature,this.toCelsius) : temperature;
        let fahrenheit= currentScale === 'c' ? this.tryConvert(temperature,this.toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput scale='c' onTemperatureChange={this.handleCelsiusChange.bind(this)} temperature={celsius} />
                <TemperatureInput scale='f' onTemperatureChange={this.handleFahrenhietChange.bind(this)} temperature={fahrenheit} />
            </div>
        )
    }
}