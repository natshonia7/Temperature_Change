import React, { useState } from "react";

const Temperature = () =>{
    
    const [temperatureValue, setTemperatureValue] = useState(10)
    const [temperatureColor, settemperatureColor] = useState('')

     const increaseTemperature= ()=>{
        if(temperatureValue===30)return;

        const axaliTemperatura=temperatureValue + 1
        if(axaliTemperatura >= 15){
            settemperatureColor('hot')
        }
        setTemperatureValue(axaliTemperatura)
     }

     const decreaseTemperature= ()=>{
        if(temperatureValue===0)return;


        const axaliTemperatura2=temperatureValue -2
        if(axaliTemperatura2 <15){
            settemperatureColor('cold')
        }
        setTemperatureValue(axaliTemperatura2)
     }


    return(
        <div className="app-container">
            <div className="temperature-display-container">
                <div className={`temperature-display ${temperatureColor}`} > {temperatureValue}°C</div>
            </div>

            <div className="button-container">
                <button onClick={increaseTemperature} > + </button>
                <button onClick={decreaseTemperature} > - </button>

            </div>
        </div>
    )
}

export default Temperature