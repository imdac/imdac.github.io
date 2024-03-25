const body = document.getElementsByTagName('body')

body[0].innerHTML += `<style>
.container {
  display: grid;
  justify-items: center;
  align-items: center;
}

.piggies {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  justify-content: center;
}

.piggy {
  counter-increment: piggy;
  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin: 15px 0;
}

.piggy img {
  width: 100%;
  max-width: 100%;
}

.piggy::before {
  position: absolute;
  top: -20px;
  content: counter(piggy);
}

.piggy::after {
  content: attr(data-spec);
}

/* Setting Piggies to Red */

div {
  background-color: red;
}

.piggy-2 {
  background-color: red;
}

div.piggy-3 {
  background-color: red;
}

.piggy.piggy-4 {
  background-color: red;
}

.piggies > .piggy.piggy-5 {
  background-color: red;
}

#piggy6 {
  background-color: red;
}

#piggies #piggy7.piggy.piggy-7 {
  background-color: red;
}
</style>
`