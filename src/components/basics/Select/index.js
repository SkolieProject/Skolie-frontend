import "./index.css";


const Select = ( { children, items } ) => {

    return (

        <select className="Select__container"
            name={children}
            id={children}
        >
            {
            items.map((item) => 

                <option className="option__container"
                
                    value={item.value}
                    key={item.value}
                >
                {item.label}</option>
            )
            }
        </select>
    );
}

export default Select;