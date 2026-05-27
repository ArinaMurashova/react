import MatrixDouble from "@/components/matrix/MatrixDouble";
import MatrixQuadruple from "@/components/matrix/MatrixQuadruple";
import MatrixTriple from "@/components/matrix/MatrixTriple";
import { useState } from "react";


const Matrix = () => {
    const [selectMatrix, setSelectMatrix] = useState<number>(1)

    return <div>
        <button
            onClick={() => setSelectMatrix(0)}
        >
            2х2
        </button>
        <button
            onClick={() => setSelectMatrix(1)}
        >
            3х3
        </button>
        <button
            onClick={() => setSelectMatrix(2)}
        >
            4x4
        </button>
        {selectMatrix == 0 ?
            <MatrixDouble />
            :
            selectMatrix == 1 ?
                <MatrixTriple />
                :
                <MatrixQuadruple />
        }
    </div>
}

export default Matrix;