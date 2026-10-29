/**
 * shuffle()
 * Shuffle the contents of an array
 *   depending the datatype of the source
 * Makes a copy. Does NOT shuffle the original.
 * Based on Steve Griffith's array shuffle prototype
 * @Parameters: Array or string
 * @Return: Scrambled Array or string, based on the provided parameter
 */
function shuffle (src) {
  const copy = [...src]

  const length = copy.length
  for (let i = 0; i < length; i++) {
    const x = copy[i]
    const y = Math.floor(Math.random() * length)
    const z = copy[y]
    copy[i] = z
    copy[y] = x
  }

  if (typeof src === 'string') {
    return copy.join('')
  }

  return copy
}

const suits = ['clubs', 'diamonds', 'hearts', 'spades']

const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

const app = {
  deck: []
}


for (const suit of suits) {
  for (const rank of ranks) {
    let value
    switch (rank) {
      case 'A':
        value = 11
        break;
      case 'K':
      case 'Q':
      case 'J':
        value = 10
        break;
      default: 
        value = parseInt(rank)
    }
    app.deck.push({ suit, rank, value })
  }
}

app.cards = shuffle(app.deck)

const $hand = document.getElementById('hand')
const $deal = document.getElementById('deal')
const $four = document.getElementById('four')
const $five = document.getElementById('five')
const $score = document.getElementById('score')
const $sort = document.getElementById('sort')

function showCards (cards) {
  app.hand = cards
  
  if (typeof dealCards === 'function') {
    const html = dealCards(cards)
    if (typeof html === 'string') {
      $hand.innerHTML = html
    } else {
      $hand.innerHTML = '<p class="fail">The dealCards() function is not returning a string</p>'
    }
    
  } else {
    $hand.innerHTML = '<p class="fail">The dealCards() function is not defined</p>'
  }
  
  if (typeof getValue === 'function') {
    const score = getValue(cards)
    if (typeof score === 'number') {
      $score.innerHTML = score
    } else {
      $score.innerHTML = '<p class="fail">The getValue() function is not returning a number</p>'
    }
  } else {
    $score.innerHTML = '<p class="fail">The getValue() function is not defined</p>'
  }
  
}

$deal.addEventListener('click', function () {
  const cards = shuffle(app.deck)
  showCards(cards)
})

$four.addEventListener('click', function () {
  const rank = ranks[Math.floor(Math.random() * ranks.length)]

  if (typeof getRanks === 'function') {
    const hand = getRanks(app.deck, rank)
    if (Array.isArray(hand)) {
      showCards(hand)
    } else {
      $hand.innerHTML = '<p class="fail">The getRanks() function is not returning an array</p>'
    }
  } else {
    $hand.innerHTML = '<p class="fail">The getRanks() function is not defined</p>'
  }
  
})

$five.addEventListener('click', function () {
  const cards = shuffle(app.deck)
  
  if (typeof getHand === 'function') {
    const hand = getHand(cards, 5)
    if (Array.isArray(hand)) {
      showCards(getHand(cards, 5))
    } else {
      $hand.innerHTML = '<p class="fail">The getHand() function is not returning an array</p>'
    }
    
  } else {
     $hand.innerHTML = '<p class="fail">The getHand() function is not defined</p>'
  }
})

$sort.addEventListener('click', function(e) {
   if (e.target.classList.contains('btn')) {
     if (typeof orderCards === 'function') {
       const hand = orderCards(app.hand, e.target.dataset.sort)
       if (Array.isArray(hand)) {
         showCards(hand)
       } else {
          $hand.innerHTML = '<p class="fail">The orderCards() function is not returning an array</p>'
       }
         
      } else {
         $hand.innerHTML = '<p class="fail">The orderCards() function is not defined</p>'
      }
   }
})


