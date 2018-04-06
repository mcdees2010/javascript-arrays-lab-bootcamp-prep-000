function kittens() {
  var kittens = ["Milo", "Otis", "Garfield"]
  return kittens
}

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.push()
  return kittens
}