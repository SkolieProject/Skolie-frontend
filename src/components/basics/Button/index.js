import "./index.css";

const Button = ( { children, action, styleGuide } ) => {

    return (

        <button style={styleGuide} id="button" onSubmit={action}>{children}</button>
    );
}


export default Button;