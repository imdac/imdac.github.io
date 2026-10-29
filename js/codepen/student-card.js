document.getElementById('makeCard').addEventListener('click', function () {
  const errors = []
  let namePass = true
  let datePass = true
  
  if (typeof firstName !== 'string') {
    errors.push('The variable firstName is not set to a string.') 
    namePass = false
  } 
  
  if (typeof lastName !== 'string') {
    errors.push('The variable lastName is not set to a string.') 
    namePass = false
 }
  
 if (namePass) {
   document.getElementById('name').innerHTML = `${lastName}<br>${firstName}`
 }
  
  
 if (typeof studentNumber === 'string') {
    document.getElementById('studentNumber').textContent = studentNumber
  } else {
    errors.push('The variable studentNumber is not set to a string.')   
  }
  
  if (typeof partTime === 'boolean') {
    if (partTime) {
      document.getElementById('partTime').classList.remove('hide')
    }
  } else {
    errors.push('The variable partTime is not set to a boolean.') 
  }
  
  
  
  if (typeof day !== 'number') {
    errors.push('The variable day is not set to a number.') 
    datePass = false
  }
  
  if (typeof month !== 'string') {
    errors.push('The variable month is not set to a string.')
    datePass = false
  }
  
  if (typeof year !== 'number') {
    errors.push('The variable year is not set to a string.')
    datePass = false
  }
  
  if (datePass) {
    document.getElementById('date').innerHTML = `
          <small>DATE ISSUED</small><br>
          ${day}/${month}/${year}`
  }
  
  document.getElementById('main').insertAdjacentHTML('beforeend', errors.map(error => `<div class="alert alert-danger">${error}</div>`).join('')) 
  
})

