function visualize (array, title = '') {
  const $body = document.querySelector('body')
  const items = array.reduce((html, item) => html + `<div class="av-item" data-content="${item}"></div>`, '')
  const h2 = `<h2 class="av-title">${title}</h2>` 
  $body.insertAdjacentHTML("beforeend", `<div class="av-array">${h2}${items}</div>`)
}