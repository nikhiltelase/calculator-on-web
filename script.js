document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelector(".buttons");
    const display = document.getElementById("result");

    display.style.fontSize = "40px"
    var baseFontSize = 40; // Initial font size
    

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
        var distance = containerWidth-textWidth

        if (distance < 25) {
            baseFontSize -= 2
            display.style.fontSize = `${baseFontSize}px`
        }else if (distance > 35){
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
