import { useState } from "react";

const MatrixTriple = () => {
    const [digit1, setDigit1] = useState<string>('');
    const [digit2, setDigit2] = useState<string>('');
    const [digit3, setDigit3] = useState<string>('');
    const [digit4, setDigit4] = useState<string>('');
    const [digit5, setDigit5] = useState<string>('');
    const [digit6, setDigit6] = useState<string>('');
    const [digit7, setDigit7] = useState<string>('');
    const [digit8, setDigit8] = useState<string>('');
    const [digit9, setDigit9] = useState<string>('');
    const [digit10, setDigit10] = useState<string>('');
    const [digit11, setDigit11] = useState<string>('');
    const [digit12, setDigit12] = useState<string>('');
    const [result1, setResult1] = useState<string>('');
    const [result2, setResult2] = useState<string>('');
    const [result3, setResult3] = useState<string>('');

    const solution = () => {
        let det = (+digit1 * +digit5 * +digit9 + +digit2 * +digit6 * +digit7 + +digit3 * +digit4 * +digit8) - (+digit7 * +digit5 * +digit3 + +digit8 * +digit6 * +digit1 + +digit9 * +digit4 * +digit2);
        let detX = (+digit10 * +digit5 * +digit9 + +digit2 * +digit6 * +digit12 + +digit3 * +digit11 * +digit8) - (+digit12 * +digit5 * +digit3 + +digit8 * +digit6 * +digit10 + +digit9 * +digit11 * +digit2);
        let detY = (+digit1 * +digit11 * +digit9 + +digit10 * +digit6 * +digit7 + +digit3 * +digit4 * +digit12) - (+digit7 * +digit11 * +digit3 + +digit12 * +digit6 * +digit1 + +digit9 * +digit4 * +digit10);
        let detZ = (+digit1 * +digit5 * +digit12 + +digit2 * +digit11 * +digit7 + +digit10 * +digit4 * +digit8) - (+digit7 * +digit5 * +digit10 + +digit8 * +digit11 * +digit1 + +digit12 * +digit4 * +digit2);

        let x = detX / det;
        let y = detY / det;
        let z = detZ / det;

        setResult1(x.toString());
        setResult2(y.toString());
        setResult3(z.toString());
    }

    return <div>
        <input type="text" value={digit1} onChange={(event) => setDigit1(event.target.value)} />
        x +
        <input type="text" value={digit2} onChange={(event) => setDigit2(event.target.value)} />
        y +
        <input type="text" value={digit3} onChange={(event) => setDigit3(event.target.value)} />
        z =
        <input type="text" value={digit10} onChange={(event) => setDigit10(event.target.value)} />

        <div>
            <input type="text" value={digit4} onChange={(event) => setDigit4(event.target.value)} />
            x +
            <input type="text" value={digit5} onChange={(event) => setDigit5(event.target.value)} />
            y +
            <input type="text" value={digit6} onChange={(event) => setDigit6(event.target.value)} />
            z =
            <input type="text" value={digit11} onChange={(event) => setDigit11(event.target.value)} />
        </div>

        <div>
            <input type="text" value={digit7} onChange={(event) => setDigit7(event.target.value)} />
            x +
            <input type="text" value={digit8} onChange={(event) => setDigit8(event.target.value)} />
            y +
            <input type="text" value={digit9} onChange={(event) => setDigit9(event.target.value)} />
            z =
            <input type="text" value={digit12} onChange={(event) => setDigit12(event.target.value)} />
        </div>

        <button
            onClick={solution}
            style={{
                background: 'red',
                padding: '5px 10px'
            }}
        >
            рассчитать
        </button>
        <div>
            x = {result1}
            y = {result2}
            z = {result3}
        </div>
    </div>
}

export default MatrixTriple;