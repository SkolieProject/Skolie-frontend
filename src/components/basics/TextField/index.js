import "./index.css";
import { v4 as uuidv4 } from 'uuid';

const TextField = ( { children, background } ) => {

    const id = uuidv4();
    return (

        <div style={{backgroundColor: background}}className="TextField">

            <input id={id} className="inputField" type="text" required></input>
            <label style={{backgroundColor: background}} className="inputLabel" for={id}>{children}</label>
        </div>
    );
}



export default TextField