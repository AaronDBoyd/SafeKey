let encodeForm = document.getElementById("encodeForm");
let decodeForm = document.getElementById("decodeForm");

encodeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let encodeRefKey = document.getElementById("encodeRefKey").value;
    let encodeSteps = parseInt(document.getElementById("encodeSteps").value);
    let encodePassword = document.getElementById("encodePassword").value;

    let outputArray = new Array();

    for (var i = 0; i < encodePassword.length; i++) {
        let currentChar = encodePassword[i];

        let keyIndex = encodeRefKey.indexOf(currentChar);

        let index = keyIndex + encodeSteps;
        if (index > 94) {
            index = index - 95;
        }

        let outputChar = encodeRefKey[index];

        outputArray.push(outputChar);
    }

    document.getElementById("encodedPassword").innerText = outputArray.join("");
});

decodeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let decodeRefKey = document.getElementById("decodeRefKey").value;
    let decodeSteps = parseInt(document.getElementById("decodeSteps").value);
    let decodePassword = document.getElementById("decodePassword").value;

    let outputArray = new Array();

    for (var i = 0; i < decodePassword.length; i++) {
        let currentChar = decodePassword[i];

        let keyIndex = decodeRefKey.indexOf(currentChar);

        let index = keyIndex - decodeSteps;
        if (index < 0) {
            index = index + 95;
        }

        let outputChar = decodeRefKey[index];

        outputArray.push(outputChar);
    }

    document.getElementById("decodedPassword").innerText = outputArray.join("");
});

function getRefKey() {
    var referenceString = " AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789!@#$%^&*()-_+={}[]|\\:;\",\'<>.?/~`";

    var refArray = referenceString.split("");

    var shuffledArray = shuffle(refArray);

    var refKeyString = shuffledArray.join("");

    document.getElementById("encodeRefKey").value = refKeyString;
    document.getElementById("decodeRefKey").value = refKeyString;
    document.getElementById("refKey").innerText = refKeyString;
}

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};