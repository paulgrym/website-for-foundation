import getAge from "design-system/helpers/getAge"

const testCases = [
  {
    value: "2021-03-24T00:00:00.000Z",
    expected: "~ 2 lata",
  },
  {
    value: "2022-07-24T00:00:00.000Z",
    expected: "poniżej roku",
  },
  {
    value: "2015-03-24T00:00:00.000Z",
    expected: "~ 8 lat",
  },
]

describe(`getAge`, () => {
  test.each(testCases)(
    "returns $expected from the date: $value",
    ({ value, expected }) => {
      expect(getAge(value)).toBe(expected)
    }
  )
})
