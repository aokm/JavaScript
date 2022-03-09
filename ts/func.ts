const sayHello: (name: string) => string = (name: string): string => {
  return `Hello, ${name}!`
}

console.log(sayHello('Taro'))

const sayHello2: (name: string) => string =  name => {
  return `Hello, ${name}!`
}

console.log(sayHello2('Jiro'))

const sayHello3 = (name: string): string => {
  return `Hello, ${name}!`
}

console.log(sayHello3('Saburo'))

const list: Array<string> = ['あ', 'い', 'う']
console.log(list)