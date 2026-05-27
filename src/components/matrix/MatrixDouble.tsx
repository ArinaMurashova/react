import { useState } from "react";

const MatrixDouble = () => {
    const [digit1, setDigit1] = useState<string>('');
    const [digit2, setDigit2] = useState<string>('');
    const [digit3, setDigit3] = useState<string>('');
    const [digit4, setDigit4] = useState<string>('');
    const [digit5, setDigit5] = useState<string>('');
    const [digit6, setDigit6] = useState<string>('');
    const [result1, setResult1] = useState<string>('');
    const [result2, setResult2] = useState<string>('');

    const solution = () => {
        let det = Number(digit1) * +digit5 - +digit2 * +digit4;
        let detX = +digit3 * +digit5 - +digit6 * +digit2;
        let detY = +digit1 * +digit6 - +digit3 * +digit4;

        let x = det / detX;
        let y = det / detY;

        setResult1(x.toString());
        setResult2(String(y));


    }

    return <div>
        <input type="text" value={digit1} onChange={(event) => setDigit1(event.target.value)} />
        x +
        <input type="text" value={digit2} onChange={(event) => setDigit2(event.target.value)} />
        y =
        <input type="text" value={digit3} onChange={(event) => setDigit3(event.target.value)} />

        <div>
            <input type="text" value={digit4} onChange={(event) => setDigit4(event.target.value)} />
            x +
            <input type="text" value={digit5} onChange={(event) => setDigit5(event.target.value)} />
            y =
            <input type="text" value={digit6} onChange={(event) => setDigit6(event.target.value)} />
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
        </div>
    </div>
}

export default MatrixDouble;