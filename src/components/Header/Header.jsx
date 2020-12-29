import React from "react";
import "./Header.css"
import {useSelector} from "react-redux";

export default () => {
    const step = useSelector(state => state.app.step)
    const showStep = useSelector(state => state.app.showStep)
    const stepDisplay = `Шаг ${step}`;
    const showResult = `Результат рассчёта`;
    return (
        <div>
            <div>
                <h1>Калькулятор цены конструкций</h1>
            </div>
            <div className="step_style">
                {showStep ? stepDisplay : showResult}
            </div>
        </div>
    )
}