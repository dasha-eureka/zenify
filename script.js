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