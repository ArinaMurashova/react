import { useState } from 'react';
import './Home.scss';

const Home = () => {
    let nums = 1;
    const [opp, setOpp] = useState<string>("Привет")
    const [result, setResult] = useState<string>("")

    const change = () => {
        setOpp("Пивет, мир");
    }

    const changeInput = (value: string) => {
        console.log (value);
        setResult (value)
    }

    return <div className="home-page">
        <div className="container">
            {
                nums
            }
            {
                opp
            }
            <button
                onClick={change}
            >
                жми
            </button>
            <input onChange={(event) => changeInput(event.target.value)} />
            {
                result
            }
        </div>
    </div>
};

export default Home;