document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelector(".buttons");
    const display = document.getElementById("result");

    var baseFontSize = 40; // Initial font size
    var minFontSize = 20; // Minimum font size
    var maxFontSize = 40; // Maximum font size
    var fontSizeStep = 2; // Font size change step

    display.style.fontSize = "40px"
    

    buttons.addEventListener("click", function (e) {
        if (e.target.tagName === "BUTTON") {
            var button_text = e.target.textContent;

            switch (button_text) {
                case "AC":
                    display.value = "";
                    break;
                case "DEL":
                    display.value = display.value.slice(0, -1);
                    break;
                case "=":
                    try {
                        // Replace 'x' with '*' for calculations
                        display.value = eval(display.value.replace(/x/g, "*"));
                    } catch {
                        display.value = "Error";
                    }
                    break;
                default:
                    display.value += button_text;
                    break;
            }

            // Adjust font size
            adjustFontSize();
        }
    });

    function adjustFontSize() {
        const containerWidth = display.clientWidth;
        const textWidth = getTextWidth(display.value, getComputedStyle(display).font);
        console.log("distenc:", containerWidth-textWidth)
        var distance = containerWidth-textWidth
        console.log("base font:", baseFontSize)

        if (distance < 25) {
            console.log("kam ho gya")
            baseFontSize -= 2
            display.style.fontSize = `${baseFontSize}px`
            }else if (distance > 25){
                console.log("jyda")
                baseFontSize = 40
                display.style.fontSize = `${baseFontSize}px`
            }
        }
            
    function getTextWidth(text, font) {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        context.font = font;
        const metrics = context.measureText(text);
        return metrics.width;
    }
});
