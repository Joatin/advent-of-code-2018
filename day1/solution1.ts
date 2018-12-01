


export function calculator(inputs: string[]): number {
    let frequency = 0;
    for(const freq of inputs) {
        frequency += Number(freq);
    }
    return frequency;
}