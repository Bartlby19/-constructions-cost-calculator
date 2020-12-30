import React from "react";
import "./ConstructionMaterial.css"
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {changeStep, getChosenMaterial, resetValue} from "../redux/actions";

const ConstructionMaterial = () => {
    const dispatch = useDispatch();
    const materials = useSelector(state => state.app.typeOfChosenMaterials)
    let showMaterials = [];
    for (let key in materials) {
        showMaterials.push(
            <li key={key}><Link to="/size" name={key} onClick={handleInputOnClick}>{materials[key]}</Link></li>
        )
    }

    function handleInputOnClick(event) {
        const target = event.target
        const name = target.name
        dispatch(changeStep())
        dispatch(getChosenMaterial(name))
    }

    return (
        <div>
            <div className="block_material_style">
                <div>
                    <div className="question_material_style">
                        Материал стен:
                    </div>
                    <div className="material_style">
                        <ul>
                            {showMaterials}
                        </ul>

                    </div>
                </div>
            </div>
            <div className="button_style">
                <Link to="/">
                    <button onClick={() => {
                        dispatch(resetValue())
                    }}>Отмена
                    </button>
                </Link>
                <Link to="size">
                    <button>Далее</button>
                </Link>
            </div>
        </div>
    )
}

export default ConstructionMaterial