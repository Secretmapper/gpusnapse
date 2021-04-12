import { SNP } from './types'

/**
 * generateSpikingVectors generates spiking vectors from config and an array of rules
 *
 * @param c config
 * @param rules array of rules per neuron
 * @returns
 */

export function generateSpikingVectors(c: SNP.Config, rules: RegExp[][]) {
  let results: number[][] = [[]];

  // HACK: This is too baroque
  for (let j = 0; j < rules.length; j++) {
    const n = c[j];
    let forRule = [];
    let hasValid = false;
    for (let k = 0; k < rules[j].length; k++) {
      const str = 'a'.repeat(n);
      const isValid = rules[j][k].test(str);
      hasValid = isValid || hasValid;

      let zeroes = new Array(n);
      for (let z = 0; z < n; ++z) {
        zeroes[z] = z === k && isValid ? 1 : 0;
      }

      if (isValid) {
        forRule.push(zeroes);
      }
    }

    if (!hasValid) {
      let zeroes = new Array(n);
      for (let z = 0; z < n; ++z)
        zeroes[z] = 0;
      forRule.push(zeroes);
    }
    results = pairOffArrays(results, forRule);
  }

  return results;
}

function pairOffArrays(c: number[][], d: number[][]) {
  let pairs = [];
  for (var i = 0; i < c.length; i++) {
    for (var j = 0; j < d.length; j++) {
      pairs.push(c[i].concat(d[j]));
    }
  }
  return pairs;
}