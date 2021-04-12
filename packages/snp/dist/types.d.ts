export declare namespace SNP {
    type Config = number[];
    type SpikingVector = number[];
    type SpikingTransitionMatrix = number[];
    type Neuron = {
        spike: number;
        rules: [
            [
                RegExp,
                number
            ]
        ];
    };
}
export declare enum COMPUTATION {
    CPU = "CPU",
    GPU = "GPU"
}
