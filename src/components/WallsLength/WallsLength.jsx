import React from "react";
import "./WallsLength.css"
import {useDispatch, useSelector} from "react-redux";

export default () => {
    const dispatch = useDispatch();
    const step = useSelector(state => state.app.step)
    return (
        <div>
            <div className="block_walls_style">
                <div>
                    <div className="walls_question_style">
                        Длинна стен (в метрах):
                    </div>
                    <div className="walls_building_style">
                        <input className="input_style" type="number" min="0"/>
                       X
                        <input className="input_style" type="number" min="0"/>
                    </div>
                </div>
            </div>
            <div>
                <button>Отмена</button>
                <button>Далее</button>
            </div>
        </div>
    )
}