let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.appendChild(span); // Use appendChild to add the span to the word
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1; // Fix the nextWordIndex calculation
    let nextWord = words[nextWordIndex]; // Use the correct nextWord index

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });

    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter behind";
            setTimeout(() => {
                letter.className = "letter in";
            }, 340 + i * 80);
        }, i * 80);
    });

    currentWordIndex = nextWordIndex; 
};

changeText();
setInterval(changeText, 3000);
