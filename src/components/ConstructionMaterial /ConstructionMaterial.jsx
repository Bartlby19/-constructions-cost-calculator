import React from "react";
import "./ConstructionMaterial.css"
import {useDispatch, useSelector} from "react-redux";

export default () => {
    const dispatch = useDispatch();
    const step = useSelector(state => state.app.step)
    return (
        <div>
            <div className="block_material_style">
                <div>
                    <div className="question_material_style">
                        Материал стен:
                    </div>
                    <div className="material_style">
                        <ul>
                            <li><a href="">Жилой дом</a></li>
                            кирпич,
                            шлакоблок, деревянный брус
                            <li><a href="">Гараж</a></li>
                            шлакоблок, металл, сендвич-панели.
                        </ul>
                    </div>
                </div>
            </div>
            <div className="button_style">
                <button>Отмена</button>
                <button>Далее</button>
            </div>
        </div>
    )
}