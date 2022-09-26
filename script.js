let btn = document.getElementById('btn');
let output = document.getElementById('output');
btn.addEventListener('click', ()=>{
    let heightFeet = document.getElementById('heightFeet').value;
    let numFeet = parseInt(heightFeet);
    let heightInches = document.getElementById('heightInches').value;
    let numInches = parseInt(heightInches);
    let inchesToHeight = numFeet + (numInches * 0.0833333)
    let metre = inchesToHeight * 0.3048;
    let weight = document.getElementById('weight').value;
    let bmi = weight / (metre * metre);
    let bmiFinal = bmi.toFixed(2);
    output.innerText = `Your BMI is ${bmiFinal}`;    
})