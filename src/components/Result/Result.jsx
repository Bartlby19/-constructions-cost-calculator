import React from "react";
import "./Result.css"
import {useDispatch, useSelector} from "react-redux";

export default () => {
    const dispatch = useDispatch();
    const step = useSelector(state => state.app.step)
    return (
        <div>
            <div className="block_material_style">
                <div>
                    <div className="question_material_style">
                        <div>Ошибка</div>
                        {/*<div>Успешно</div>*/}
                    </div>
                    <div className="material_style">

                        <div className="err_style">Некорректные размеры здания</div>
                        {/*<div className="norm_answer_style">Цена строения: 224 тыс. пиастров</div>*/}
                    </div>
                </div>
            </div>
            <div>
                <button>Новый расчёт</button>
            </div>
        </div>
    )
}