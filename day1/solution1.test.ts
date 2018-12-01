import {calculator} from "./solution1";


test('it should compute frequency correctly', async () => {
    const data = [
        '+1',
        '-2',
        '+3',
        '+1'
    ];

    const result = calculator(data);
    expect(result).toEqual(3);
});