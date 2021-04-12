declare namespace SNP {
    type Config = number[];
    type SpikingVector = number[];
    type SpikingTransitionMatrix = number[];
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
export declare function getConfig(c: SNP.Config, s: SNP.SpikingVector, m: SNP.SpikingTransitionMatrix): number[];
export declare function initialize(): void;
export {};
