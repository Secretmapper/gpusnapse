export namespace SNP {
  export type Config = number[]
  export type SpikingVector = number[]
  export type SpikingTransitionMatrix = number[]
  export type Neuron = {
    spike: number
    rules: [
      [RegExp, number]
    ]
  }
}

export enum COMPUTATION {
  CPU = 'CPU',
  GPU = 'GPU'
}