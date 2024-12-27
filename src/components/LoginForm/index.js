import "./index.css";

import TextField from "../basics/TextField";
import Button from "../basics/Button";

const LoginForm = () => {

    return (
        
        <form className="LoginForm">
            <div className="formContent">
                
                <TextField background="#3381a2">Email</TextField>
                <TextField background="#3381a2">Senha</TextField>
            </div>

            <Button
                styleGuide={{
                    margin: 'auto'
                }}
            >Entrar</Button>
        </form>
    );
}


export default LoginForm;