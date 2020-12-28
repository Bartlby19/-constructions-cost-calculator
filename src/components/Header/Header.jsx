import React from "react";
import "./Header.css"
import {useSelector} from "react-redux";

export default () => {
    const step = useSelector(state => state.app.step)
    return (
        <div>
            <div>
                <h1>Калькулятор цены конструкций</h1>
            </div>
            <div className="step_style">
                Шаг {step}
            </div>
        </div>

    )
}