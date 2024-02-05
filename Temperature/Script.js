const calculateTemperature = () =>{
    const intTemp = parseFloat(document.getElementById('temp').value);

    const dTemp = document.getElementById('diffTemp');

    const oTemp = dTemp.options[dTemp.selectedIndex].value;

    const celToFah = (cel) =>
    {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    const fahToCel =(fah) =>{
        let celsius = (((fah - 32) * 5) / 9).toFixed(1);
        return celsius;
    }

    if(oTemp == "cel")
    {
        document.getElementById("result").innerHTML = celToFah(intTemp) + "Fahrenheit";
    }
    else{
        document.getElementById("result").innerHTML = fahToCel(intTemp) + "Celsius";
    }

    document.getElementById('calTemp').addEventListener('submit',function(e){
        e.preventDefault();
        calculateTemperature();
    })
}