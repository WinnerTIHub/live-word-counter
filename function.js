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

const footer = document.createElement("div");
footer.innerText = `© 2025 WinnerTIHub. made by WinnerTIHub`;
footer.classList.add("copyright");document.body.appendChild(footer);
