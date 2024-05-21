document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelector(".buttons");
    const display = document.getElementById("result");

    buttons.addEventListener("click", function (e) {
        if (e.target.tagName === "BUTTON") {
            const value = e.target.textContent;

            switch (value) {
                case "AC":
                    display.value = "";
                    break;
                case "DEL":
                    display.value = display.value.slice(0, -1);
                    break;
                case "=":
                    try {
                        display.value = eval(display.value);
                    } catch {
                        display.value = "Error";
                    }
                    break;
                default:
                    display.value += value;
                    break;
            }
        }
    });
});
