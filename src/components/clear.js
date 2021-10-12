import React from 'react';
import CalcPage from '../App';

function clear() {
    CalcPage.currentOp = ''
    CalcPage.previousOp = ''
    CalcPage.ops = undefined
    return (
        <div>

        </div>
    )
}

export default clear;