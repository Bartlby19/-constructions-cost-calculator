import React, {useEffect, useState} from "react";
import "./WallsSize.css"
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {resetValue} from "../redux/actions";

const WallsSize = () => {
    const dispatch = useDispatch();
    const [wallLength, setWallLength] = useState("");
    const [wallHeight, setWallHeight] = useState("");
    const [disable, setDisable] = useState(true);

    function handleInputChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name
        if (name === "length") {
            setWallLength(value)
        } else {
            setWallHeight(value)
        }
    }

    useEffect(() => {
        let exist = (!!wallLength && !!wallHeight);
        if (exist) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    });

    return (
        <div>
            <div className="block_walls_style">
                <div>
                    <div className="walls_question_style">
                        Длинна стен (в метрах):
                    </div>
                    <form>
                        <div className="walls_building_style">
                            <input className="input_style" onChange={handleInputChange} name="length" type="number"
                                   required="required" min="1"/>
                            X
                            <input className="input_style" onChange={handleInputChange} name="height" type="number"
                                   required="required" min="1"/>
                        </div>
                    </form>
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
                    <button disabled={disable}>Рассчитать</button>
                </Link>
            </div>
        </div>
    )
}
export default WallsSize