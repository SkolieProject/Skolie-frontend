import "./index.css";

import { v4 as uuidv4 } from "uuid";



const Radio = ( { 
    action,
    options = [['Option1', 'id1'], ['Option2', 'id2']] 
} ) => {

    const idGroup = `group_${uuidv4()}`;

    return (
        <div className="RadioOptions__container">

        {
        options.map((newData) => 
        
            <div className="RadioOption__container"
                key={newData[1]}
            >
                <input id={newData[1]} className="toggle"
                    type="radio"
                    name={idGroup}
                    value={newData[1]}
                    onChange={() => action(newData[1])}
                    required
                ></input>
                
                <label className="radioLabel"
                    for={newData[1]}
                >
                    <span className="checkmark"></span>
                    <span className="optionLabel">{newData[0]}</span>
                </label>
            </div>
        )
        }
        </div>
        
    );
}


export default Radio;