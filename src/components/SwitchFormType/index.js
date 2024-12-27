import "./index.css";

const SwitchFormType = ( { formTypeChanger, styleGuide } ) => {

    return (

        <div className="SwitchFormType" style={styleGuide}>

            <input type="checkbox" className="toggle" id="toggle" onChange={() => formTypeChanger()}></input>

            <label for="toggle" class="switch">
                
                <div className="toLogin">Bem vindo de volta!</div>
                <div className="toSignup">Novo por aqui?</div>
            </label>
        </div>
    );
}

export default SwitchFormType;