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
  kittens.pop()
  return kittens
}

function 