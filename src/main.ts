export function obtainMayusPositionsInString(text: string): number[] {
  const numbers: number[] = []

  let regex: RegExp = /[A-Z]/g
  // let output = text.match(regex)
  // output?.forEach((mayus) => {
  //   numbers.push(text.indexOf(mayus))
  // })

  for (let position = 0; position < text.length; position++) {
    if (regex.test(text[position])) {
      numbers.push(position)
    }
  }

  return numbers
}
