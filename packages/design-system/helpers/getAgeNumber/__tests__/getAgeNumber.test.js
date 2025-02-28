import getAgeNumber from "design-system/helpers/getAgeNumber"

const testCases = [
  {
    value: "2021-03-24T00:00:00.000Z",
    expected: 2,
  },
  {
    value: "2022-07-24T00:00:00.000Z",
    expected: 0,
  },
  {
    value: "2015-03-24T00:00:00.000Z",
    expected: 8,
  },
]

describe(`getAgeNumber`, () => {
  test.each(testCases)(
    "returns $expected from the date: $value",
    ({ value, expected }) => {
      expect(getAgeNumber(value)).toBe(expected)
    }
  )
})
