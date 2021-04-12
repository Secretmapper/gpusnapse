namespace SNP {
  export type Config = number[]
  export type SpikingVector = number[]
  export type SpikingTransitionMatrix = number[]
}

/**
 * getConfig after applying spiking vector and transition matrix on config
 * 
 * C_{k+1} = C_{k} + s^{(k)} · M_{Π}
 * 
 * @param c config at k
 * @param s spiking vector
 * @param m spiking transition matrix
 * @returns 
 */
export function getConfig (
  c: SNP.Config,
  s: SNP.SpikingVector,
  m: SNP.SpikingTransitionMatrix
) {
  const width = c.length
  const transition = new Array(m.length)
  const result = [...c]

  // multiply
  for (let s_i = 0; s_i < s.length; s_i++) {
    for (let m_i = 0; m_i < width; m_i++) {
      transition[s_i * width + m_i] = s[s_i] * m[s_i * width + m_i]
    }
  }

  // columnar add
  for (let t_i = 0; t_i < transition.length; t_i++) {
    const column = t_i % width
    result[column] += transition[t_i]
  }

  return result
}

export function initialize() {
  console.log('init')
}