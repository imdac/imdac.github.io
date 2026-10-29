const $results = document.getElementById('results')
const $averages = document.getElementById('averages')

$averages.addEventListener('click', function () {
  if (typeof mean === 'function') {
      const average = mean(numbers)
      
      
      if (average == 3) {
         $results.innerHTML += `<p class="pass"><strong>Mean is correct.</strong></p>`
      } else {
         $results.innerHTML += `<p class="fail"><strong>Mean  is not correct.</strong></p>`
      }
  } else {
    $results.innerHTML += `<p class="fail"><strong>No mean() function</p>`
  }
  
   if (typeof median === 'function') {
     const average = median(numbers)
     
     if (average == 3) {
         $results.innerHTML += `<p class="pass"><strong>Median is correct.</strong></p>`
      } else {
         $results.innerHTML += `<p class="fail"><strong>Median is not correct.</strong></p>`
      }
  } else {
    $results.innerHTML += `<p class="fail"><strong>No median() function</p>`
  }
  
  if (typeof mode === 'function') {
     const average = mode(numbers)
     
     if (average == 3) {
         $results.innerHTML += `<p class="pass"><strong>Mode  is correct.</strong></p>`
      } else {
         $results.innerHTML += `<p class="fail"><strong>Mode is not correct.</strong></p>`
      }
  } else {
    $results.innerHTML += `<p class="fail"><strong>No mode() function</p>`
  }
})

