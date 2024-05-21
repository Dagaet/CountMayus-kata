import { describe, it, expect } from "vitest"
import { obtainMayusPositionsInString } from "./main.js"

// Should return empty array when there are no mayus
// Should return an array with positions when there are mayus

describe("obtainMayusPositionsInString should ", () => {
  it("not register any position when there are no mayus", () => {
    const result = obtainMayusPositionsInString("")

    expect(result).toStrictEqual([])
  })
})
