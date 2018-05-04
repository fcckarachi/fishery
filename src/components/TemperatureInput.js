import React,{Component} from 'react';

export default class TemperatureInput extends Component{

    constructor(){
        super();
        // this.state={
        //     temperature:''
        // };
    }

    onChange(e){
        let value;
        value = e.target.value;
        //this.setState({temperature : value});
        this.props.onTemperatureChange(value);
    }

    render(){
        // let temperature = this.state.temperature;
        let temperature = this.props.temperature;        
        let scale = this.props.scale;
        let scaleName = scale === 'c' ? 'Celsius' : 'Fahrenheit';

        return(
            <fieldset>
                <legend>Enter temperature in {scaleName}</legend>

                <input value={temperature} onChange={this.onChange.bind(this)} 
                    placeholder="Enter Temperature" />
            </fieldset>
        )
    }
}