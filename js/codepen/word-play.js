const $results = document.getElementById('results')
const $check = document.getElementById('check')

$check.addEventListener('click', function () {
  const results = []
  const phrase = "The quick brown fox jumps over the lazy dog"
  const word1 = 'racecar'
  const word2 = 'minivan'
  const number = 1234567890
  
  if (typeof wordCount === 'function') {
     if (wordCount(phrase) === 9) {
       results.push(`<p class="pass">The wordCount() function passed!</p>`)
     } else {
       results.push(`<p class="fail">The wordCount() function failed!</p>`)
     }
  } else {
    results.push(`<p class="fail">The wordCount() function does not exists.</p>`)  
  }
  
  if (typeof palindrome === 'function') {
    if (palindrome(word1) === true && palindrome(word2) === false) {
      results.push(`<p class="pass">The palindrome() function passed!</p>`)
    } else {
       results.push(`<p class="fail">The palindrome() function failed!</p>`)
    }
  } else {
    results.push(`<p class="fail">The palindrome() function does not exists.</p>`)  
  }
  
  if (typeof formatPhone === 'function') {
    if (formatPhone(number) === '(123) 456-7890') {
       results.push(`<p class="pass">The formatPhone() function passed!</p>`)
    } else {
      results.push(`<p class="fail">The formatPhone() function failed!</p>`)  
    }
  } else {
    results.push(`<p class="fail">The formatPhone() function does not exists.</p>`)  
  }
  
  $results.innerHTML = results.join('')
})