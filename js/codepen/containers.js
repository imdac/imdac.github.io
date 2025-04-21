window.onload = function () {
  const $js = document.getElementById('INLINE_PEN_JS_ID')
  const $containers = document.getElementById('containers')
  const regex = /\bconst\b\s+(\s*(\w+)\s*)(\s*=\s*)(\s*\'*\"*[\w,\d]+\'*\"*)/g
  const matches = $js.textContent.match(regex)

  const variables = matches.map(match => ({
    name: match.trim().substring(6, match.indexOf('=')).trim(),
    value: match.trim().substring(match.indexOf('=') + 1).trim()
  }))

  const containers = []

  for (const variable of variables) {
    containers.push(`
      <div class="container">
        <div class="value">${variable.value}</div>
        ${variable.name}
      </div>
    `)
  }

  $containers.innerHTML = containers.join('')
}


