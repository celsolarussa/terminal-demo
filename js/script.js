document.addEventListener("DOMContentLoaded", function () {
    const outputElement = document.getElementById("output");
    const resultElement = document.getElementById("result");
    const nextLineElement = document.getElementById("nextLine");

    const textCode = `$ python -c "print('Hello, world!')"`;
    const textResult = `Hello, world!`;

    function typeText(element, text, interval) {
        return new Promise((resolve) => {
            let index = 0;
            const typingInterval = setInterval(() => {
                element.textContent += text[index];
                index++;
                if (index === text.length) {
                    clearInterval(typingInterval);
                    resolve();
                }
            }, interval);
        });
    }

    async function runDemo() {
        await typeText(outputElement, textCode, 50);
        await new Promise((resolve) => setTimeout(resolve, 300));
        resultElement.textContent = textResult;
        nextLineElement.textContent = "$";
    }

    runDemo();
});
