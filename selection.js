function calculateResult() {
    // Get the selected values of the parameters
    let region = document.getElementById('region').value;
    let objectType = document.getElementById('objectType').value;
    let price = Number(document.querySelector("#price").value);
    let areaRange = Number(document.querySelector("#areaRange").value);

    // Display the selected parameters and result on the website
    
    if(region == "Baku"){
        if (price >= 10000 && price <=40000){
            document.getElementById('result').innerHTML = "Solar Cell is the best for you!<br>";
        }
        else if (price >= 45000){
            document.getElementById('result').innerHTML = "Wind Turbine";
        }
    }
          
}