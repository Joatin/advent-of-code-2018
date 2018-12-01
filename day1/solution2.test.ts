import {calculator} from "./solution2";


test('It should return right frequency for data set 1', async () => {
    const data1 = [
        '+1',
        '-1'
    ]

    const result = calculator(data1);
    expect(result).toEqual(0);
});

test('It should return right frequency for data set 2', async () => {
    const data2 = [
        '+3',
        '+3',
        '+4',
        '-2',
        '-4'
    ];

    const result = calculator(data2);
    expect(result).toEqual(10);
});

test('It should return right frequency for data set 3', async () => {
    const data3 = [
        '-6',
        '+3',
        '+8',
        '+5',
        '-6'
    ];

    const result = calculator(data3);
    expect(result).toEqual(5);
});

test('It should return right frequency for data set 4', async () => {
    const data4 = [
        '+7',
        '+7',
        '-2',
        '-7',
        '-4'
    ];

    const result = calculator(data4);
    expect(result).toEqual(14);
});