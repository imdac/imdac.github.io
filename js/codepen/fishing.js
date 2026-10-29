const $fishBtn = document.getElementById('fishBtn')
const $baitBtn = document.getElementById('baitBtn')
const $fireBtn = document.getElementById('fireBtn')
const $eatBtn = document.getElementById('eatBtn')
const $alert = document.getElementById('alert')

function reset() {
  $alert.classList.add('opacity-0')
  $alert.textContent = 'No Alert'
}

function setAlert(message) {
  $alert.textContent = 'The fish function is not available.'
  $alert.classList.remove('opacity-0')
}

$fishBtn.addEventListener('click', function () {
  reset()

  if (typeof goFish === 'function') {
    goFish()
  } else {
    setAlert('The goFish function is not available.')
  }
})

$baitBtn.addEventListener('click', function () {
  reset()

  if (typeof getBait === 'function') {
    getBait()
  } else {
    setAlert('The getBait function is not available')
  }
})

$fireBtn.addEventListener('click', function () {
  reset()

  if (typeof tendFire === 'function') {
    tendFire()
  } else {
    setAlert('The tendFire function is not available')
  }
})

$eatBtn.addEventListener('click', function () {
  reset()

  if (typeof eat === 'function') {
    eat()
  } else {
    setAlert('The eat function is not avialable')
  }
})