import React from "react";
import "./Result.css"
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {resetValue} from "../redux/actions";

const Result = () => {
    const dispatch = useDispatch();
    const response = useSelector(state => state.app.result)
    console.log(response["result"])
    let responseResult;
    let responseMessage;
    if (response["result"] === "ok") {
        responseResult = <div>Успешно</div>
        responseMessage = <div className="norm_answer_style">{response["message"]}</div>
    } else {
        responseResult = <div>Ошибка</div>
        responseMessage = <div className="err_style">{response["message"]}</div>

    }
    return (
        <div>
            <div className="block_material_style">
                <div>
                    <div className="question_material_style">
                        {responseResult}
                    </div>
                    <div className="material_style">
                        {responseMessage}
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