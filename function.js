const textArea = document.querySelector("#text-input");

const wordCount = document.querySelector("#word-count");
const charCount = document.querySelector("#character-count");


function wordCountFun () {
    const filter = textArea.value.trim().replace(/\s/g, "");
    const length = filter.length;

    wordCount.innerText = length;
}

textArea.addEventListener("input", wordCountFun);

function wordCountChar() {
    const clearText = textArea.value.trim().replace(/\s/g, " ").split(" ");
    charCount.innerText = clearText.length;
}

textArea.addEventListener("input", wordCountChar);

document.addEventListener("DOMContentLoaded", () => {
    alert("I've optimized this practice work for just 1300px precise and 600px screen size");
    alert("make sure your screen is set to either sizes to enjoy it fully");
})