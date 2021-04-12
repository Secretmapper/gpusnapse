import { COMPUTATION } from './types'
import { getConfig } from './getConfig'
import { generateSpikingVectors } from './generateSpikingVectors'

const matrices = [
  {
    c: [2, 1, 2],
    s: [
      [1, 0, 1, 0, 1],
      [0, 1, 1, 0, 1],
    ],
    m: [
      -1, 1, 1,
      -2, 1, 1,
      1, -1, 1,
      0, 0, -1,
      0, 0, -2
    ],
    rules: [
      [
        new RegExp("^aa$"),
        new RegExp("^aa$"),
      ],
      [
        new RegExp("^a$"),
      ],
      [
        new RegExp("^a$"),
        new RegExp("^aa$"),
      ]
    ],
    results: {
      spikingVectors: [
        [1, 0, 1, 0, 1],
        [0, 1, 1, 0, 1],
      ],
      config: [
        new Float32Array([2, 1, 2]),
        new Float32Array([1, 1, 2]),
      ]
    }
  }
]

describe('getConfig', () => {
  it('returns proper result matrix withCPU', () => {
    for (let mIn of matrices) {
      const { c, s, m, results } = mIn
      const configs = getConfig(c, s, m, COMPUTATION.CPU)
      expect(configs).toEqual(results.config)
    }
  })
  it('returns proper result matrix withGPU', () => {
    for (let mIn of matrices) {
      const { c, s, m, results } = mIn
      const configs = getConfig(c, s, m, COMPUTATION.GPU)
      expect(configs).toEqual(results.config)
    }
  })
})

describe('generateSpikingVectors', () => {
  it('returns all spiking vectors', () => {
    for (let mIn of matrices) {
      const { c, rules, results } = mIn
      const spikingVectors = generateSpikingVectors(c, rules)
      expect(spikingVectors).toEqual(results.spikingVectors)
    }
  })
})