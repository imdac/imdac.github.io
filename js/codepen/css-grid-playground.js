document.body.insertAdjacentHTML('afterbegin', `<div id="outline" class="outline show">${'<div class="outline-item"></div>'.repeat(81)}</div>`)

document.body.insertAdjacentHTML('beforeend', `<button class="button" id="toggleOutline">Toggle Outline</button>
<button class="button" id="toggleGrid">Toggle Grid Items</button>`)

const grid = document.getElementById('grid')
const outline = document.getElementById('outline')

grid.addEventListener('mouseover', function (e) {

  if (e.target.classList.contains('grid-item')) {
    e.target.classList.add('show')
  }
})

grid.addEventListener('mouseout', function (e) {

  if (e.target.classList.contains('grid-item')) {
    e.target.classList.remove('show')
  }
})

const toggleGrid = document.getElementById('toggleGrid')

toggleGrid.addEventListener('click', function (e) {
  grid.classList.toggle('show')
})

const toggleOutline = document.getElementById('toggleOutline')

toggleOutline.addEventListener('click', function (e) {
  outline.classList.toggle('show')
})