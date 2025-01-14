let buttons = document.querySelectorAll("button") as NodeListOf<HTMLButtonElement>
let inputs = document.querySelector("input") as HTMLInputElement

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.value

        switch (value) {
            case 'AC':
                inputs.value = "";
                break;

            case "=":
                inputs.value = eval(inputs.value)
                break;

            case "DEL":
                inputs.value = inputs.value.slice(0, -1)
                break;
            default:
                inputs.value += value
        }
    }
    )

})