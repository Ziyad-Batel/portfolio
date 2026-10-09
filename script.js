<!-- ZIYAD BATEL ALBALOWI 445050099 -->
function showMessage() {
    document.getElementById("message").innerHTML = "Welcome to my personal portfolio website!";
}

function sendForm() {
    var name = document.getElementById("name").value;
    document.getElementById("formResult").innerHTML = "Thank you, " + name + ". Your message has been received.";
    return false;
}