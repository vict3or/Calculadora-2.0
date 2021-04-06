const keys = document.querySelectorAll('.keys')
const clearScreenButton = document.querySelector('#clear')
const deleteButton = document.querySelector('#delete')
const equalButton = document.querySelector('#equal')
let screenOne = document.querySelector('.one')
let screenTwo = document.querySelector('.two')



// this checks if it is the first time after the calc has past in to the screenOne 
// if is the first, then equals to 1, else, equals to 0
let checkFirstTimeAfterScreenOne = 0


let checkIfEqualWasToggled = false
// functions

function solveMath() {
  screenOne.innerHTML += screenTwo.innerHTML

  let fullEquation = screenOne.innerHTML
  let fullEquationArray = fullEquation.split(' ')

  let firstElement = Number(fullEquationArray[0])
  for (let i = 0; i < fullEquationArray.length; i++) {
    if (fullEquationArray[i] == 'x') {
      firstElement *= Number(fullEquationArray[i + 1])
    } else if (fullEquationArray[i] == '/') {
      firstElement /= Number(fullEquationArray[i + 1])
    } else if (fullEquationArray[i] == '+') {
      firstElement += Number(fullEquationArray[i + 1])
    } else if (fullEquationArray[i] == '-') {
      firstElement -= Number(fullEquationArray[i + 1])
    }
  }
  screenOne.innerHTML += ` =`
  screenTwo.innerHTML = firstElement
  checkIfEqualWasToggled = true
  checkFirstTimeAfterScreenOne = 0
}
function insertOnScreen(e) {
  let element = e.target.innerText

  if(checkIfEqualWasToggled){
    screenOne.innerHTML = ''
    checkIfEqualWasToggled = false
  }

  if (isNaN(element) && element != '.') {
    console.log('entrei')
    screenTwo.innerHTML += ' ' + element + ' '
    screenOne.innerHTML += screenTwo.innerHTML
    screenTwo.innerHTML = screenTwo.innerHTML.slice(0, screenTwo.innerHTML.indexOf(element) - 1)
    checkFirstTimeAfterScreenOne = 1
  } else {
    if (checkFirstTimeAfterScreenOne == 1) {
      screenTwo.innerHTML = element
      checkFirstTimeAfterScreenOne = 0
    } else {
      screenTwo.innerHTML += element
    }
  }
}

function deleteScreenContent() {
  screenTwo.innerText = screenTwo.innerText.slice(0, -1);
}

function clearScreen() {
  screenOne.innerText = ''
  screenTwo.innerText = ''
}


//calls 

equalButton.addEventListener('click', solveMath)
deleteButton.addEventListener('click', deleteScreenContent)
clearScreenButton.addEventListener('click', clearScreen)
for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', insertOnScreen)
}