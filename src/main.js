let score = 0

let clicker = document.getElementById("clicker")

let scoreDisplay = document.getElementById("scoreDisplay")

const formatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 2,
  nontation:'compact',
  compactDisplay: 'short'
})


clicker.addEventListener("click", function() {
  let clickAmt = 1 + (click ** 3.05)
  
  updateScore(clickAmt)
  clickSound.stop()
  clickSound.play()
})

let upgradeOne = document.getElementById("upgradeOne")
let upgradeOneCount = document.getElementById("upgradeOneCount")
let click = 0

upgradeOne.addEventListener("click", function() {
  if (score >= 500) {
    updateScore(-500)
    click++
    upgradeOneCount.innerText = clicker + '   clicker'
    clickTwo.stop()
    clickTwo.play()
  } else {
    alert("Not enough cash!")
  }

})

let upgradeTwo = document.getElementById("upgradeTwo")
let upgradeTwoCount = document.getElementById("upgradeTwoCount")
let value = 0

upgradeTwo.addEventListener("click", function() {
  if (score >= 500) {
    updateScore(-500)
    value++
    upgradeTwoCount.innerText = clicker + '   clicker'
    clickTwo.stop()
    clickTwo.play()
  } else {
    alert("Not enough cash!")
  }

})

function updateScore(amount) {
  score += amount
  scoreDisplay.innerText = formatter.format(score) + '  Cash'
}

function gameLoop() {
  let clickAmt = (value ** 1.05)

  updateScore(clickAmt)
}

setInterval(gameLoop, 1000)

import { Howl } from 'howler';

import clickSrc from './assets/dishes.mp3';
// import levelUpSrc from './assets/bakery.mp3';
import clickTwoSrc from './assets/clicktwo.mp3';

const levelUp = new Howl({
  src: [levelUpSrc],
autoplay: true,
loop: true,
volume: 0.5,
});

const clickSound = new Howl({
  src: [clickSrc],
  volume: 0.5,
});

const clickTwo = new Howl({
  src: [clickTwoSrc],
  volume: 0.5,
});