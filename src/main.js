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
})

let upgradeOne = document.getElementById("upgradeOne")
let upgradeOneCount = document.getElementById("upgradeOneCount")
let click = 0

upgradeOne.addEventListener("click", function() {
  if (score >= 500) {
    updateScore(-500)
    click++
    upgradeOneCount.innerText = clicker + '   clicker'
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
