import { GPU } from 'gpu.js';
const gpu = new GPU();
export function getConfigGPU(c, s, m) {
    const width = c.length;
    const height = s[0].length;
    const multSpikingTransition = gpu.createKernel(function (s, m, w) {
        return m[this.thread.x] * s[this.thread.y][Math.floor(this.thread.x / w)];
    }).setOutput([m.length, s.length]);
    const columnarAdd = gpu
        .createKernel(function (c, s, w, h) {
        let sum = c[this.thread.x];
        for (let i = 0; i < h; i++) {
            sum += s[this.thread.y][i * w + this.thread.x];
        }
        return sum;
    })
        .setOutput([width, s.length]);
    const compute = gpu.combineKernels(multSpikingTransition, columnarAdd, function (c, s, m, w, h) {
        return columnarAdd(c, multSpikingTransition(s, m, w), w, h);
    });
    const result = compute(c, s, m, width, height);
    return result;
}
