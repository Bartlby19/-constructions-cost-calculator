import React, {useState} from "react";
import "./FloorsNumber.css"
import {changeFloorsAmount, changeStep, resetValue} from "../redux/actions";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const FloorsNumber = () => {
    const dispatch = useDispatch();
    const [floorsAmount, setFloors] = useState(1);
    const [disable, setDisable] = useState(true);

    function getFloorsAmount() {
        dispatch(changeStep());
        dispatch(changeFloorsAmount(floorsAmount));
    }

    function handleInputChange(event) {
        const target = event.target
        const value = target.value
        setFloors(value)
        if (value && Number(value) >= 1) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }

    return (
        <div>
            <div className="block_walls_style">
                <div>
                    <div className="walls_question_style">
                        Количество этажей (число):
                    </div>
                    <form className="walls_building_style">
                        <input onChange={handleInputChange} className="input_walls_style" type="number"
                               min="1"/>
                    </form>
                </div>
            </div>
            <div>
                <Link to="/">
                    <button onClick={() => dispatch(resetValue())}> Отмена</button>
                </Link>
                <Link to="/material">
                    <button disabled={disable} onClick={() => getFloorsAmount()}>Далее</button>
                </Link>
            </div>
        </div>
    )
}
export default FloorsNumber