let heightInput = document.getElementById("height") as HTMLInputElement
let weightInput = document.getElementById("weight") as HTMLInputElement

let btn = document.querySelector("button") as HTMLButtonElement
let resultText = document.getElementById("resultText") as HTMLParagraphElement

btn.addEventListener("click", () => {
    const weightValue = Number(weightInput.value)
    let heightValue = Number(heightInput.value)

    if (heightValue > 3) {
        heightValue = heightValue / 100
    }

    const resultBMI: number = weightValue / (heightValue * heightValue)
    let bmiStatus: string

    if (resultBMI < 18.5) {
        bmiStatus = "Zayıf"
    } else if (resultBMI < 25) {
        bmiStatus = "Normal"
    } else if (resultBMI < 30) {
        bmiStatus = "Kilolu"
    } else {
        bmiStatus = "Obez"
    }

    resultText.innerHTML = `VKİ Sonucu: ${resultBMI.toFixed(2)} Durum: ${bmiStatus}`
})
