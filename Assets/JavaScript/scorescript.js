var highScore = JSON.parse(localStorage.getItem("quiz")) || [];
var scEl = document.getElementById("highS");



for (var i = 0; i < highScore.length; i++) {
    var list = document.createElement("h1");
    list.textContent = highScore[i];
    scEl.appendChild(list);
}