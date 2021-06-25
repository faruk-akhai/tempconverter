const CalculateTemp= ()=>{
    const  number = document.getElementById('temp').value;
    const tempselected = document.getElementById('temp_diff');
    const valuetemp = temp_diff.options[tempselected.selectedIndex].value; 
    const celtofah= (cel) =>{
        let Fahrenheit = Math.round((cel*9/5)+32);
        return Fahrenheit;
    }
    const fahtocel= (fehr) =>{
        let celsius = Math.round((fehr - 32)*5/9);
        return celsius;
    }
    let result;
    if(valuetemp == 'cel' ){
        result = celtofah(number);
        document.getElementById('resultcontainer').innerHTML = `= ${result}°Fahrenheit`
    }else{
        result = fahtocel(number);
        document.getElementById('resultcontainer').innerHTML = `= ${result}°Celsius`
    }
}