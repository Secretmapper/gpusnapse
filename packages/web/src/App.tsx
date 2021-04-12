import React, { useEffect } from 'react'
import { genMatrix } from '@gpusnapse/benchmarks'
import {
  getConfigCPU,
  getConfigGPU,
  generateSpikingVectors,
} from "@gpusnapse/snp"

const setup = genMatrix(14)

const log = (name: string, fn: Function) => {
  const t0 = performance.now()
  fn()
  const t1 = performance.now()
  console.log(`Call to ${name} took ${t1 - t0} milliseconds.`)
}

function App () {
  useEffect(() => {
    const spikingVectors = generateSpikingVectors(setup.c, setup.rules)
    log('cpu', () => getConfigCPU(setup.c, spikingVectors, setup.m))
    log('gpu', () => getConfigGPU(setup.c, spikingVectors, setup.m))
  }, [])

  return (
    <div></div>
  )
}

export default App
