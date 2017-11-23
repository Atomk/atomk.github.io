var greetings = ["Hola", "Ciao", "Salut", "Привет", "Ehiii", "Ohila", "Yo", "Cip", "Bau", "%!£)^", "Hi"];

var hey = document.getElementById("hey");

hey.addEventListener("click", function() {
    var randomIndex = Math.floor(Math.random()*greetings.length);
    this.innerHTML = greetings[randomIndex] + ".";
});

// When everything is loaded, show the footer (the library takes a few seconds to load)
window.onload = function() {
    document.querySelector("footer");
};
