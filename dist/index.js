"use strict";
let email = document.querySelector("#email");
let error = document.querySelector(".error");
function validation() {
    if (email.value == "" || email.value == null) {
        error.classList.add("show");
        email.classList.add("focus");
        email.focus();
        error.classList.remove("error");
        return false;
    }
    else {
        error.classList.add("error");
        email.classList.remove("focus");
        error.classList.remove("show");
    }
    return;
}
//# sourceMappingURL=index.js.map