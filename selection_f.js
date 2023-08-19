function calculateResult() {
    // Get the selected values of the parameters
    let region = String(document.getElementById('region').value);
    let objectType = document.getElementById('objectType').value;
    let price = Number(document.querySelector("#price").value);
    let areaRange = Number(document.querySelector("#areaRange").value);

    // Display the selected parameters and result on the website
    
    
    
        if (price >= 10000 && price <=40000){
            document.getElementById('result').innerHTML = "Günəş Panelləri ən uyğun seçimdir!<br>";
            document.getElementById('linked').innerHTML = "Daha Çox";
       
        }
        else if (price >= 45000){
            document.getElementById('result').innerHTML = "Wind Turbine";
        }
        else {
            document.getElementById('result').innerHTML = "HydroPower is best for you!";
        }


    
          
}