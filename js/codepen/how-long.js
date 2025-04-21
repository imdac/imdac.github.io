window.onload = function () {
  const Info = luxon.Info

  const years = []

  for (let i = now.year; i <= now.year + 20; i++) {
      if (now.year === i) {
        years.push(`<option value="${i}" selected>${i}</option>`)  
      } else {
        years.push(`<option value="${i}">${i}</option>`)  
      }
  }

  $year.innerHTML = years.join('')

  const months = []
  
  for (let i = 0; i < 12; i++) {
    if (now.month === i + 1) {
      months.push(`<option value="${i + 1}" selected>${Info.months()[i]}</option>`)
    } else {
      months.push(`<option value="${i + 1}">${Info.months()[i]}</option>`)
    }
  }

  $month.innerHTML = months.join('')

  $month.addEventListener('change', setDays)

  $year.addEventListener('change', setDays)

  setDays()
}