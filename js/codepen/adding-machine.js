numbers.addEventListener('click', function (e) {
  if (e.target.classList.contains('plus')) {
    if (typeof increase === 'function') {
      e.target.parentElement.firstElementChild.textContent = increase(e.target.parentElement.id)
    }
  } else if (e.target.classList.contains('minus')) {
    if (typeof decrease === 'function') {
      e.target.parentElement.firstElementChild.textContent = decrease(e.target.parentElement.id)
    }
  }

  if (typeof add === 'function') {
    answer.textContent = add()
  }
})