import React from "react";
import "./BuildingChoice.css"
import {useDispatch} from "react-redux";
import {changeStep, getTypeOfStructure} from "../redux/actions";
import {Link} from 'react-router-dom'

export default () => {
    const dispatch = useDispatch();

    function handleInputOnClick(event) {
        const target = event.target
        const name = target.name
        dispatch(changeStep())
        dispatch(getTypeOfStructure(name))
    }
        return (
        <div>
            <div className="block_material_style">
                <div>
                    <div className="question_material_style">
                        Что будем строить?
                    </div>
                    <div className="material_style">
                        <ul>
                            <li><Link to="/floors" name="house"   onClick={handleInputOnClick}>Жилой дом</Link></li>
                            <li><Link to="/material" name="garage" onClick={handleInputOnClick}>Гараж</Link></li>
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