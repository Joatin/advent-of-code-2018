

export function calculator(inputs: string[]): number {
    let frequency = 0;
    const prevFreq = [frequency];
    while(true) {
        for(let freq of inputs) {
            frequency += Number(freq);
            if(prevFreq.includes(frequency)) {
                return frequency;
            } else {
                prevFreq.push(frequency);
            }
        }
    }
}