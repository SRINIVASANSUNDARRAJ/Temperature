function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    const tounit = document.getElementById('tounit').value;
    const resultElement = document.getElementById('result');

    if (isNaN(temperature)) {
        resultElement.textContent = 'Please enter a valid number';
        return;
    }

    let celsius, fahrenheit, kelvin;
    if (unit === 'C') {
        celsius = temperature;
        if(tounit=="F"){
            fahrenheit = (celsius * 9 / 5) + 32; 
            resultElement.textContent =` ${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`
        }
        else if(tounit=="K"){
             kelvin = celsius + 273.15;
             resultElement.textContent = `${celsius}°C is equal to ${kelvin.toFixed(2)}K`}
        else
        {
             resultElement.textContent=`${celcious}°C is equal to ${celcious.toFixed(2)}°C`
        }
    } else if (unit === 'F') {
        fahrenheit = temperature;
        if(tounit==="C"){
            celsius = (fahrenheit - 32) * 5 / 9;
            resultElement.textContent = `${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`
        }
        else if(tounit==="K"){
            kelvin = (fahrenheit-32) * 5/9 + 273.15;
            resultElement.textContent = `${fahrenheit}°F is equal to ${kelvin.toFixed(2)}K`;
        }
        else{
            resultElement.textContent = `${fahrenheit}°F is equal to ${fahrenheit.toFixed(2)}F`;
        }
    } else if (unit === 'K') {
        kelvin = temperature;
        if(tounit=="F"){
            fahrenheit = (kelvin-273.15 )* 9 / 5 + 32;
            resultElement.textContent = `${kelvin}K is equal to ${fahrenheit.toFixed(2)}°F`;
        }
        else if(tounit=="C"){
            celsius = kelvin - 273.15;
            resultElement.textContent = `${kelvin}K is equal to ${celsius.toFixed(2)}°C`
        }
        else{
            resultElement.textContent = `${kelvin}K is equal to ${kelvin.toFixed(2)}K`
        }
    
    }
    }
