import { useState } from "react";

const Calculate = () => {
const [digit1, setDigit1] = useState<number>(0);
const [digit2, setDigit2] = useState<number>(0);
const [result, setResult] = useState<number>(0);

    return <div>
        <input onChange={(event) => setDigit1(Number(event.target.value))}></input>
        <button
            onClick={() => setResult(Number(digit1+digit2))}
        >
            +
        </button>

        <button
            onClick={() => setResult(Number(digit1-digit2))}
        >
            -
        </button>

        <button
            onClick={() => setResult(Number(digit1/digit2))}
        >
            :
        </button>

        <button
            onClick={() => setResult(Number(digit1*digit2))}
        >
            *
        </button>

        <input onChange={(event) => setDigit2(Number(event.target.value))}></input> = {result}
    </div>
}

export default Calculate;