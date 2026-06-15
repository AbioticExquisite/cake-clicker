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
  if (score >= 700) {
    updateScore(-700)
    click++
    upgradeOneCount.innerText = 'Amount:  ' + click
    clickTwo.stop()
    clickTwo.play()
  } else {
    alert("🚫Not enough cash!")
  }

})

let upgradeTwo = document.getElementById("upgradeTwo")
let upgradeTwoCount = document.getElementById("upgradeTwoCount")

let value = 0

upgradeTwo.addEventListener("click", function() {
  if (score >= 500) {
    updateScore(-500)
    value++
    upgradeTwoCount.innerText = 'Amount:  ' + value
    clickTwo.stop()
    clickTwo.play()
  } else {
    alert("🚫Not enough cash!")
  }

})

let upgradeThr = document.getElementById("upgradeThr")
let upgradeThrCount = document.getElementById("upgradeThrCount")

let number = 0

upgradeThr.addEventListener("click", function() {
  if (score >= 1000) {
    updateScore(-1000)
    number++
    upgradeThrCount.innerText = 'Amount:  ' + number
    clickTwo.stop()
    clickTwo.play()
  } else {
    alert("🚫Not enough cash!")
  }

})

let upgradeFur = document.getElementById("upgradeFur")
let upgradeFurCount = document.getElementById("upgradeFurCount")
let time = 0

upgradeFur.addEventListener("click", function() {
  if (score >= 500) {
    updateScore(-500)
    time++
    upgradeFurCount.innerText = 'Amount:  ' + time
    clickTwo.stop()
    clickTwo.play()
  } else {
    alert("🚫Not enough cash!")
  }

})

let upgradeFiv = document.getElementById("upgradeFiv")
let upgradeFivCount = document.getElementById("upgradeFivCount")

let val = 0

upgradeFiv.addEventListener("click", function() {
  if (score >= 700) {
    updateScore(-700)
    val++
    upgradeFivCount.innerText = 'Amount:  ' + val
    clickTwo.stop()
    clickTwo.play()
  } else {
    alert("🚫Not enough cash!")
  }

})

let upgradeSix = document.getElementById("upgradeSix")
let upgradeSixCount = document.getElementById("upgradeSixCount")

let num = 0

upgradeSix.addEventListener("click", function() {
  if (score >= 1000) {
    updateScore(-1000)
    num++
    upgradeSixCount.innerText = 'Amount:  ' + num
    clickTwo.stop()
    clickTwo.play()
  } else {
    alert("🚫Not enough cash!")
  }

})


function updateScore(amount) {
  score += amount
  scoreDisplay.innerText = score.toFixed(0)  + '  Cash'
}

function gameLoop() {
  let clickAmt = (value ** 1.05)

  updateScore(clickAmt)
}

setInterval(gameLoop, 1000)

import { Howl } from 'howler';

import clickSrc from './assets/dishes.mp3';
import levelUpSrc from './assets/birthday-cake.mp3';
import clickTwoSrc from './assets/clicktwo.mp3';

const levelUp = new Howl({
  src: [levelUpSrc],
autoplay: true,
loop: true,
volume: 0.3,
});

const clickSound = new Howl({
  src: [clickSrc],
  volume: 1.0,
});

const clickTwo = new Howl({
  src: [clickTwoSrc],
  volume: 1.0,
});