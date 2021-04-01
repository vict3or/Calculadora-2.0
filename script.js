const keys = document.querySelectorAll('.keys')
const clearScreenButton = document.querySelector('#clear')
const deleteButton = document.querySelector('#delete')
const equalButton = document.querySelector('#equal')
let screenOne = document.querySelector('.one')
let screenTwo = document.querySelector('.two')
const divide = document.querySelector('.divide')
const multiply = document.querySelector('.multiply')
const subtract = document.querySelector('.subtract')
const sums = document.querySelector('.sums')

let valThreeSolve = 0
let sign = ''
let signTwo = ''
let checker = 0
let checkIfEqualWasToggled = false 

// functions

function equalsTo() {
  checkIfEqualWasToggled = true
  solve()
}

function insertOnScreenTwo(e) {
  if (checker == 0) {
    screenTwo.innerText += e.target.innerText
  } else if (checker == 1) {
    screenTwo.innerText = ''
    screenTwo.innerText += e.target.innerText
    checker = 2
  } else if (checker == 2) {
    screenTwo.innerText += e.target.innerText
  }

}

function deleteScreenContent() {
  screenTwo.innerText = screenTwo.innerText.slice(0, -1);
}

function clearScreen() {
  screenOne.innerText = ''
  screenTwo.innerText = ''
  valThreeSolve = 0
  checkIfEqualWasToggled = false
  checker = 0
}

function solve() {
  let screenTwoText = screenTwo.innerText
  let signTwoSolve = ''
  let signThree = ''
  let solveSign = ''

  for (let i = 0; i < screenTwoText.length; i++) {
    if (isNaN(screenTwoText[i]) && screenTwoText[i] != '.') {
      solveSign = screenTwoText[i]
      break
    }
  }

  let valOneSolve = Number(screenTwo.innerText.split(solveSign)[0])
  let valTwoSolve = screenTwo.innerText.split(solveSign)[1]

  for (let i = 0; i < valTwoSolve.length; i++) {
    if (!isNaN(valTwoSolve[i])) {
      signTwoSolve += valTwoSolve[i]
    } else {
      signThree = valTwoSolve[i]
    }
  }

  valTwoSolve = Number(signTwoSolve)


  if (solveSign == '+') {
    if (valThreeSolve == 0) {
      sign = signTwo
      screenOne.innerText = `${valOneSolve}+${valTwoSolve}`
      screenTwo.innerText = `${valOneSolve + valTwoSolve}${signThree}`
      valThreeSolve = valOneSolve + valTwoSolve
    } else {
      sign = signTwo
      screenOne.innerText = `${valThreeSolve}+${valTwoSolve}`
      screenTwo.innerText = `${valThreeSolve + valTwoSolve}${signThree}`
      valThreeSolve += valOneSolve
    }
  }
  else if (solveSign == '-') {
    if (valThreeSolve == 0) {
      sign = signTwo
      screenOne.innerText = `${valOneSolve}-${valTwoSolve}`
      screenTwo.innerText = `${valOneSolve - valTwoSolve}${signThree}`
      valThreeSolve = valOneSolve - valTwoSolve
    } else {
      sign = signTwo
      screenOne.innerText = `${valThreeSolve}-${valTwoSolve}`
      screenTwo.innerText = `${valThreeSolve - valTwoSolve}${signThree}`
      valThreeSolve -= valTwoSolve
    }
  } else if (solveSign == 'x') {
    if (valThreeSolve == 0) {
      sign = signTwo
      screenOne.innerText = `${valOneSolve}x${valTwoSolve}`
      screenTwo.innerText = `${valOneSolve * valTwoSolve}${signThree}`
      valThreeSolve = valOneSolve * valTwoSolve
    } else {
      sign = signTwo
      screenOne.innerText = `${valThreeSolve}x${valTwoSolve}`
      screenTwo.innerText = `${valThreeSolve * valTwoSolve}${signThree}`
      valThreeSolve *= valTwoSolve
    }
  } else if (solveSign == '/'){
    if (valThreeSolve == 0) {
      sign = signTwo
      screenOne.innerText = `${valOneSolve}/${valTwoSolve}`
      screenTwo.innerText = `${valOneSolve / valTwoSolve}${signThree}`
      valThreeSolve = valOneSolve / valTwoSolve
    } else {
      sign = signTwo
      screenOne.innerText = `${valThreeSolve}/${valTwoSolve}`
      screenTwo.innerText = `${valThreeSolve / valTwoSolve}${signThree}`
      valThreeSolve /= valOneSolve
    }
  }

}

function multiplyFunction() {
  let valOne = 0
  let valTwo = 0
  if (sign != 'x' && sign != '') {
    signTwo = 'x'
    solve()
    return
  } else {
    console.log('passei por aqui')
    valOne = Number(screenTwo.innerText.split('x')[0])
    valTwo = Number(screenTwo.innerText.split('x')[1])
  }
  sign = 'x'
  screenOne.innerText += screenTwo.innerText
  if (valTwo == 0 && valThreeSolve == 0 || checkIfEqualWasToggled == true) {
    return
  } else if (valThreeSolve == 0) {
    screenOne.innerText = `${valOne * valTwo} x`
    screenTwo.innerText = `${valOne * valTwo}`
    checker = 1
    valThreeSolve = valOne * valTwo
  } else {
    screenOne.innerText = `${valOne * valThreeSolve} x`
    screenTwo.innerText = `${valOne * valThreeSolve}`
    checker = 1
    valThreeSolve *= valOne
  }
}

function sumFunction() {
  let valOne = 0
  let valTwo = 0
  if (sign != '+' && sign != '') {
    signTwo = '+'
    solve()
    return
  } else {
    valOne = Number(screenTwo.innerText.split('+')[0])
    valTwo = Number(screenTwo.innerText.split('+')[1])
    sign = '+'
  }
  screenOne.innerText += screenTwo.innerText
  if (valTwo == 0 && valThreeSolve == 0 || checkIfEqualWasToggled == true) {
    sign = '+'
    return
  } else if (valThreeSolve == 0) {
    screenOne.innerText = `${valOne - valTwo} +`
    screenTwo.innerText = `${valOne - valTwo}`
    checker = 1
    valThreeSolve = valOne - valTwo
  } else {
    screenOne.innerText = `${valOne + valThreeSolve} -`
    screenTwo.innerText = `${valOne + valThreeSolve}`
    checker = 1
    valThreeSolve += valOne
  }
}

function subtractFunction() {
  let valOne = 0
  let valTwo = 0
  if (sign != '-' && sign != '') {
    signTwo = '-'
    solve()
    return
  } else {
    valOne = Number(screenTwo.innerText.split('-')[0])
    valTwo = Number(screenTwo.innerText.split('-')[1])
    sign = '-'
  }
  screenOne.innerText += screenTwo.innerText
  if (valTwo == 0 && valThreeSolve == 0 || checkIfEqualWasToggled == true) {
    sign = '-'
    return
  } else if (valThreeSolve == 0) {
    screenOne.innerText = `${valOne - valTwo} -`
    screenTwo.innerText = `${valOne - valTwo}`
    checker = 1
    valThreeSolve = valOne - valTwo
  } else {
    screenOne.innerText = `${valOne - valThreeSolve} -`
    screenTwo.innerText = `${valOne - valThreeSolve}`
    checker = 1
    valThreeSolve -= valOne
  }
}

function divideFunction() {
  let valOne = 0
  let valTwo = 0
  if (sign != '/' && sign != '') {
    signTwo = '/'
    solve()
    return
  } else {
    valOne = Number(screenTwo.innerText.split('/')[0])
    valTwo = Number(screenTwo.innerText.split('/')[1])
    sign = '/'
  }
  screenOne.innerText += screenTwo.innerText
  if (valTwo == 0 && valThreeSolve == 0 || checkIfEqualWasToggled == true) {
    sign = '/'
    return
  } else if (valThreeSolve == 0) {
    screenOne.innerText = `${valOne / valTwo} -`
    screenTwo.innerText = `${valOne / valTwo}`
    checker = 1
    valThreeSolve = valOne - valTwo
  } else {
    screenOne.innerText = `${valOne / valThreeSolve} /`
    screenTwo.innerText = `${valOne / valThreeSolve}`
    checker = 1
    valThreeSolve /= valOne
  }
}




// function calls
equalButton.addEventListener('click', equalsTo)
deleteButton.addEventListener('click', deleteScreenContent)
clearScreenButton.addEventListener('click', clearScreen)
for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', insertOnScreenTwo)
}

// calc calls

multiply.addEventListener('click', multiplyFunction)
divide.addEventListener('click', divideFunction)
subtract.addEventListener('click', subtractFunction)
sums.addEventListener('click', sumFunction)
