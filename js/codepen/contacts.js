function createElement (type, props, ...children) { 
  const $el = document.createElement(type)
  Object.keys(props).forEach(prop => $el[prop] = props[prop])
  $el.append(...children)
  return $el
}

function buildTable () {
  const $contacts = document.getElementById('contacts')
  $contacts.innerHTML = ''
  $contacts.append(...contacts.map(contact =>
      createElement('tr', {},
        createElement('td', {}, contact.favorite ? '⭐️' : ''), 
        createElement('td', {}, contact.name),
        createElement('td', {}, contact.email),
        createElement('td', {}, contact.type)
      )
    )
  )
}