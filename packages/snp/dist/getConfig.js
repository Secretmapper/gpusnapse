import { getConfigCPU } from './getConfigCPU';
import { getConfigGPU } from './getConfigGPU';
import { COMPUTATION } from './types';
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
export function getConfig(c, s, m, w = COMPUTATION.CPU) {
    if (w === COMPUTATION.CPU) {
        return getConfigCPU(c, s, m);
    }
    else {
        return getConfigGPU(c, s, m);
    }
}
