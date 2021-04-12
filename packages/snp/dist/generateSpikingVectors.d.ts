import { SNP } from './types';
/**
 * generateSpikingVectors generates spiking vectors from config and an array of rules
 *
 * @param c config
 * @param rules array of rules per neuron
 * @returns
 */
export declare function generateSpikingVectors(c: SNP.Config, rules: RegExp[][]): number[][];
