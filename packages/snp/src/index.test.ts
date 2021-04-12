import { getConfig } from './index';

const matrices = [
  {
    c: [2, 1, 2],
    s: [1, 0, 1, 0, 1],
    m: [
      -1, 1, 1,
      -2, 1, 1,
      1, -1, 1,
      0, 0, -1,
      0, 0, -2
    ],
    r: [2, 1, 2]
  },
  {
    c: [2, 1, 2],
    s: [0, 1, 1, 0, 1],
    m: [
      -1, 1, 1,
      -2, 1, 1,
      1, -1, 1,
      0, 0, -1,
      0, 0, -2
    ],
    r: [1, 1, 2]
  },
]

describe('getConfig', () => {
  it('works', () => {
    for (let mIn of matrices) {
      const { c, s, m, r } = mIn
      expect(getConfig(c, s, m)).toEqual(r)
    }
  })
})
