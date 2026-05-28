import { matrix3 } from "@/utils/matrix/code.matrix";
import { useState } from "react";

const MatrixQuadruple = () => {
    const [digit1, setDigit1] = useState<string>('1');
    const [digit2, setDigit2] = useState<string>('1');
    const [digit3, setDigit3] = useState<string>('1');
    const [digit4, setDigit4] = useState<string>('1');
    const [digit5, setDigit5] = useState<string>('10');
    const [digit6, setDigit6] = useState<string>('2');
    const [digit7, setDigit7] = useState<string>('-1');
    const [digit8, setDigit8] = useState<string>('3');
    const [digit9, setDigit9] = useState<string>('-1');
    const [digit10, setDigit10] = useState<string>('5');
    const [digit11, setDigit11] = useState<string>('3');
    const [digit12, setDigit12] = useState<string>('1');
    const [digit13, setDigit13] = useState<string>('-1');
    const [digit14, setDigit14] = useState<string>('2');
    const [digit15, setDigit15] = useState<string>('10');
    const [digit16, setDigit16] = useState<string>('1');
    const [digit17, setDigit17] = useState<string>('-2');
    const [digit18, setDigit18] = useState<string>('1');
    const [digit19, setDigit19] = useState<string>('3');
    const [digit20, setDigit20] = useState<string>('12');
    const [result1, setResult1] = useState<string>('');
    const [result2, setResult2] = useState<string>('');
    const [result3, setResult3] = useState<string>('');
    const [result4, setResult4] = useState<string>('');


    const solution = () => {
        let det = Number(digit1) * matrix3(+digit7, +digit13, +digit19, +digit8, +digit14, +digit17, +digit9, +digit12, +digit18) - Number(digit2) * matrix3(+digit6, +digit13, +digit19, +digit8, +digit14, +digit16, +digit9, +digit11, +digit18) + Number(digit3) * matrix3(+digit6, +digit12, +digit19, +digit7, +digit14, +digit16, +digit9, +digit11, +digit17) - Number(digit4) * matrix3(+digit6, +digit12, +digit18, +digit7, +digit13, +digit16, +digit8, +digit11, +digit17);
        let detX = Number(digit5) * matrix3(+digit7, +digit13, +digit19, +digit8, +digit14, +digit17, +digit9, +digit12, +digit18) - Number(digit2) * matrix3(+digit10, +digit13, +digit19, +digit8, +digit14, +digit20, +digit9, +digit15, +digit18) + Number(digit3) * matrix3(+digit10, +digit12, +digit19, +digit7, +digit14, +digit20, +digit9, +digit15, +digit17) - Number(digit4) * matrix3(+digit10, +digit12, +digit18, +digit7, +digit13, +digit20, +digit8, +digit15, +digit17);
        let detY = Number(digit1) * matrix3(+digit10, +digit13, +digit19, +digit8, +digit14, +digit20, +digit9, +digit15, +digit18) - Number(digit5) * matrix3(+digit6, +digit13, +digit19, +digit8, +digit14, +digit16, +digit9, +digit11, +digit18) + Number(digit3) * matrix3(+digit6, +digit15, +digit19, +digit10, +digit14, +digit16, +digit9, +digit11, +digit20) - Number(digit4) * matrix3(+digit6, +digit15, +digit18, +digit10, +digit13, +digit16, +digit8, +digit11, +digit20);
        let detZ = Number(digit1) * matrix3(+digit7, +digit15, +digit19, +digit10, +digit14, +digit17, +digit9, +digit12, +digit20) - Number(digit2) * matrix3(+digit6, +digit15, +digit19, +digit10, +digit14, +digit16, +digit9, +digit11, +digit20) + Number(digit5) * matrix3(+digit6, +digit12, +digit19, +digit7, +digit14, +digit16, +digit9, +digit11, +digit17) - Number(digit4) * matrix3(+digit6, +digit12, +digit20, +digit7, +digit15, +digit16, +digit10, +digit11, +digit17);
        let detW = Number(digit1) * matrix3(+digit7, +digit13, +digit20, +digit8, +digit15, +digit17, +digit10, +digit12, +digit18) - Number(digit2) * matrix3(+digit6, +digit13, +digit20, +digit8, +digit15, +digit16, +digit10, +digit11, +digit18) + Number(digit3) * matrix3(+digit6, +digit12, +digit20, +digit7, +digit15, +digit16, +digit10, +digit11, +digit17) - Number(digit5) * matrix3(+digit6, +digit12, +digit18, +digit7, +digit13, +digit16, +digit8, +digit11, +digit17);

        let x = detX / det;
        let y = detY / det;
        let z = detZ / det;
        let w = detW / det;

        setResult1(x.toString());
        setResult2(y.toString());
        setResult3(z.toString());
        setResult4(w.toString());
    }
    return <div>
        
        <div>
            <input type="text" value={digit1} onChange={(event) => setDigit1(event.target.value)} />
            x +
            <input type="text" value={digit2} onChange={(event) => setDigit2(event.target.value)} />
            y +
            <input type="text" value={digit3} onChange={(event) => setDigit3(event.target.value)} />
            z +
            <input type="text" value={digit4} onChange={(event) => setDigit4(event.target.value)} />
            w =
            <input type="text" value={digit5} onChange={(event) => setDigit5(event.target.value)} />
        </div>

        <div>
            <input type="text" value={digit6} onChange={(event) => setDigit6(event.target.value)} />
            x +
            <input type="text" value={digit7} onChange={(event) => setDigit7(event.target.value)} />
            y +
            <input type="text" value={digit8} onChange={(event) => setDigit8(event.target.value)} />
            z +
            <input type="text" value={digit9} onChange={(event) => setDigit9(event.target.value)} />
            w =
            <input type="text" value={digit10} onChange={(event) => setDigit10(event.target.value)} />
        </div>

        <div>
            <input type="text" value={digit11} onChange={(event) => setDigit11(event.target.value)} />
            x +
            <input type="text" value={digit12} onChange={(event) => setDigit12(event.target.value)} />
            y +
            <input type="text" value={digit13} onChange={(event) => setDigit13(event.target.value)} />
            z +
            <input type="text" value={digit14} onChange={(event) => setDigit14(event.target.value)} />
            w =
            <input type="text" value={digit15} onChange={(event) => setDigit15(event.target.value)} />
        </div>

        <div>
            <input type="text" value={digit16} onChange={(event) => setDigit16(event.target.value)} />
            x +
            <input type="text" value={digit17} onChange={(event) => setDigit17(event.target.value)} />
            y +
            <input type="text" value={digit18} onChange={(event) => setDigit18(event.target.value)} />
            z +
            <input type="text" value={digit19} onChange={(event) => setDigit19(event.target.value)} />
            w =
            <input type="text" value={digit20} onChange={(event) => setDigit20(event.target.value)} />
        </div>

        <button onClick={solution} style={{ background: 'red', padding: '5px 10px' }}>
            рассчитать
        </button>

        <div>
            x = {result1}
            y = {result2}
            z = {result3}
            w = {result4}
        </div>

    </div>
}

export default MatrixQuadruple;