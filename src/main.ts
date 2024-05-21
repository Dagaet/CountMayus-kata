export function obtainMayusPositionsInString(text: string): number[] {
  const mayusPositionsInText: number[] = []

  let mayusRegex: RegExp = /[A-Z]/g

  for (let position = 0; position < text.length; position++) {
    let isMayus = mayusRegex.test(text[position])
    if (isMayus) {
      mayusPositionsInText.push(position)
    }
  }

  return mayusPositionsInText
}
