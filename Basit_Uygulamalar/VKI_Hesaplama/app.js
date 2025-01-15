"use strict";
let heightInput = document.getElementById("height");
let weightInput = document.getElementById("weight");
let btn = document.querySelector("button");
let resultText = document.getElementById("resultText");
btn.addEventListener("click", () => {
    const weightValue = Number(weightInput.value);
    let heightValue = Number(heightInput.value);
    if (heightValue > 3) {
        heightValue = heightValue / 100;
    }
    const resultBMI = weightValue / (heightValue * heightValue);
    let bmiStatus;
    if (resultBMI < 18.5) {
        bmiStatus = "Zayıf";
    }
    else if (resultBMI < 25) {
        bmiStatus = "Normal";
    }
    else if (resultBMI < 30) {
        bmiStatus = "Kilolu";
    }
    else {
        bmiStatus = "Obez";
    }
    resultText.innerHTML = `VKİ Sonucu: ${resultBMI.toFixed(2)} Durum: ${bmiStatus}`;
});
