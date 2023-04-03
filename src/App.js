import { useState } from "react";

function Calculator() {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");
    const opr = ["/", "*", "+", "-", "."];
    const updateCalc = (value) => {
        if (
            (opr.includes(value) && calc === "") ||
            (opr.includes(value) && opr.includes(calc.slice(-1)))
        ) {
            return;
        }
        setCalc(calc + value);
        if (!opr.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    };

    const createDigits = () => {
        const digits = [];
        for (let i = 1; i < 10; i++) {
            digits.push(
                <button onClick={() => updateCalc(i.toString())} key={i}>
                    {i}
                </button>
            );
        }
        return digits;
    };

    const calculate = () => {
        setCalc(eval(calc).toString());
    };
    const deleteAll = () => {
        const value = "";
        setCalc(value);
    };
    return (
        <div className="App">
            <div className="calculator">
                <div className="display">{calc || 0}</div>

                <div className="digitsAll">
                    <div className="digits">
                        {createDigits()}
                        <button>0</button>
                        <button>.</button>
                        <button onClick={calculate}>=</button>
                    </div>
                    <div className="operators">
                        <button onClick={() => updateCalc("/")}>/</button>
                        <button onClick={() => updateCalc("*")}>*</button>
                        <button onClick={() => updateCalc("+")}>+</button>
                        <button onClick={() => updateCalc("-")}>-</button>
                        <button onClick={deleteAll}>AC</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Calculator;
