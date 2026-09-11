const ninja = document.getElementById('ninja')
const controls = document.getElementById('controls')
const buttons = document.querySelectorAll('.btn')


function toggleButtons () {
  console.log(buttons);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.toggle('disabled')
  }
}

controls.addEventListener('click', function (e) {

  if (e.target.classList.contains('btn') && !e.target.classList.contains('disabled')) {
    ninja.classList.add(e.target.id)
    toggleButtons()

    setTimeout(function () {
      ninja.style.transition = "0s"
      ninja.className = "ninja"
    }, 2000)

    setTimeout(function () {
      toggleButtons()
      ninja.style = []
    }, 2500)
  }
})