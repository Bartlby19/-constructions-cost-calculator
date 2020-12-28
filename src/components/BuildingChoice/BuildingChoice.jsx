import React from "react";
import "./BuildingChoice.css"
import {useDispatch, useSelector} from "react-redux";

export default () => {
    const dispatch = useDispatch();
    const step = useSelector(state => state.app.step)
    return (
        <div>
            <div className="block_material_style">
                <div>
                    <div className="question_material_style">
                        Что будем строить?
                    </div>
                    <div className="material_style">
                        <ul>
                            <li><a href="">Жилой дом</a></li>
                            <li><a href="">Гараж</a></li>
                        </ul>
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