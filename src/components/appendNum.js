import React from 'react';
import CalcPage from '../App';

function appendNum() {
    CalcPage.nums.forEach(button => {
        button.addEventListener('click', () => {
            CalcPage.calculator.appendNum(button.innerText)
            CalcPage.calculator.updateDisplay()
        })
    });
    return (
        <div>
        </div>
    )
}

export default appendNum;