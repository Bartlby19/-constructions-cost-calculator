import React from "react";
import "./Result.css"
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {resetValue} from "../redux/actions";

const Result = () => {
    const dispatch = useDispatch();
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
                <Link to="/">
                    <button onClick={() => dispatch(resetValue())}>Новый расчёт</button>
                </Link>
            </div>
        </div>
    )
}

export default Result