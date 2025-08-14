const input = document.getElementById("input");

input.onblur = function() {
    const val = input.value.trim();

    if (val === "") {
        error.style.display = "none";
    } else if (!val.includes("@")) {
        error.textContent = "Invalid email";
        error.style.display = "block";
    } else {
        error.style.display = "none";
    }
}

input.oninput = function() {
    if (input.value.trim() === "") {
        error.style.display = "none";
    }
}

const input2 = document.getElementById("input2");
const error2 = document.getElementById("error2");

input2.onblur = function() {
    const val2 = input2.value.trim();

    if (val2 === "") {
        error2.style.display = "none";
    } else if (!val2.includes("@")) {
        error2.textContent = "Invalid email";
        error2.style.display = "block";
    } else {
        error2.style.display = "none";
    }
}

input2.oninput = function() {
    if (input2.value.trim() === "") {
        error2.style.display = "none";
    }
}