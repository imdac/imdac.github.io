function PokemonName (props) {
  const name = props.name || 'Ditto'
  return React.createElement('h2', { className: 'mb-0 text-capitalize'}, name)
}

function PokemonHP (props) {
  const hp = typeof props.stats === 'object' ? props.stats[0].base_stat : typeof props.stats === 'string' ? props.stats : '48'

  return React.createElement(
    'h3', 
    {className: 'mb-0'},
    React.createElement('span', { className: 'fs-6'}, 'HP'),
    hp
  )
}

function PokemonMoves (props) {
  const [moves, setMoves] = React.useState([
    {
      move: {
        name: "transform", 
        effect: "User becomes a copy of the target until it leaves battle."
      } 
    }
  ])

  function deslugify (string) {
    return string.replace('-', ' ')
  }

  React.useEffect(() => {
    if (props.moves) {
      (async function () {
        const movesData = await getMoves(props.moves)
        setMoves(movesData)
      })()
    }
  }, [props.moves])

  const moveElements = moves.map(move => {
    return React.createElement(
      'div', 
      { key: move.move.name, className: 'mb-3 text-center' },
      React.createElement(
        'h4',
        { className: 'text-center, text-capitalize mb-0' },
        deslugify(move.move.name)
      ),
      React.createElement(
        'small',
        { className: 'fs-6' },
        move.move.effect
      )
    )
  })

  return React.createElement(
    'div',
    {},
    ...moveElements
  )
}

function PokemonCardHeader ({ children }) {

  return React.createElement(
    'div',
    { className: 'card-header d-flex justify-content-between'},
    children
  )
}

function PokemonCardBody ({ children }) {
  return React.createElement(
    'div',
    { className: 'card-body' },
    children
  )
}

function PokemonImage (props) {
  const sprite = props.sprites ? props.sprites.other['official-artwork'].front_default : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png'

  return React.createElement(
    'div',
    { className: 'card-img mb-5' },
    React.createElement(
      'img',
      { src: sprite, className: 'img-fluid' } 
    )
  )
}

function PokemonCard ({children}) {
  return React.createElement(
    'div',
    { className: 'card' },
    children
  )
}

function PokemonSelect (props) {
  const [options, setOptions] = React.useState([])
  const limit = props.limit || 20
 

  React.useEffect(() => {
    (async function () {
      const optionsData = await fetch('https://pokeapi.co/api/v2/pokemon?limit=' + limit)
        .then(response => response.json())

      setOptions(optionsData.results.map(option => option.name))
    })()
  }, [])

  function handleChange (e) {
    props.onSelected(e.target.value)
  }

  const optionElements = options.map(option => {
    return React.createElement(
      'option',
      { key: option },
      option
    )
  })

  return React.createElement(
    'select',
    { 
      className: 'form-select mb-3 text-capitalize',
      onChange: handleChange
    },
    React.createElement(
      'option',
      { value: '' },
      'Select A Pokemon'
    ),
    ...optionElements
  )
}

async function getMoves (moves) {
  const index = Math.floor(Math.random() * (moves.length - 3))
  
  return await Promise.all(
    moves.slice(index, index + 2).map(async (move) => {
        const m = await fetch(move.move.url).then(response => response.json())
        move.move.effect =  m.effect_entries[0].short_effect
        return move
    })
  )  
}
