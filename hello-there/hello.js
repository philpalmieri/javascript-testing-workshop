const capitalize = (s) => {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const hello = (name) => `Hello, ${capitalize(name)}`

exports.hello = hello
