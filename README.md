# Scoreboard Number Game 🎮

Dive into the world of numbers with the Scoreboard Number Game! 🚀

## Overview 🌟

Challenge yourself in this interactive number game, where each click on the buttons updates your score dynamically. Keep an eye on your progress as the scoreboard records both the minimum and maximum scores. The HTML structure provides a sleek and engaging interface for an immersive gaming experience.

## Quick Look at the Code 🧑‍💻

```javascript
// JavaScript code for the number game scoreboard
let score = document.getElementById('scorebox');
(score.innerText) = '';
let keybox = document.getElementsByClassName('box');

for (let i = 0; i < keybox.length; i++) {
    keybox[i].addEventListener("click", function () {
        score.innerText += keybox[i].innerText;
    })
}

let minnumber = document.getElementById('min');
let maxnumber = document.getElementById('max');
let enter = document.getElementById('enter');

enter.addEventListener("click", function () {
    if (Number(score.innerText) < Number(minnumber.innerText)) {
        minnumber.innerText = score.innerText;
    } else if (Number(score.innerText) > Number(maxnumber.innerText)) {
        maxnumber.innerText = score.innerText;
    }
})
Embark on a numerical adventure with the Scoreboard Number Game! 🚀✨
