import React from "react";
import "./WallsSize.css"
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {resetValue} from "../redux/actions";

export default () => {
    const dispatch = useDispatch();

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
                <Link to="/">
                    <button onClick={() => {
                        dispatch(resetValue())
                    }}>Отмена
                    </button>
                </Link>
                <Link to='/result'>
                <button>Рассчитать</button>
                </Link>
            </div>
        </div>
    )
}