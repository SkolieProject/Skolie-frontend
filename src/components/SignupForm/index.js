import "./index.css";

import { useState } from 'react';

import Button from "../basics/Button";
import TextField from "../basics/TextField";
import Radio from "../basics/Radio";

const SignupForm = ( { signupRequest } ) => {
    
    const [accType, setAccType] = useState('');

    return (

        <form className="SignupForm">

            <section class="formContent">
                
                <TextField background="#3381a2">Nome</TextField>
                <TextField background="#3381a2">Email</TextField>
                <TextField background="#3381a2">Senha</TextField>

                <Radio
                
                    action={setAccType}
                    options={[
                        ['Professor', 'TEACHER'],
                        ['Aluno', 'STUDENT']
                    ]}
                >
                </Radio>

                {
                    (accType === 'TEACHER') ? (
                        
                        <Button>Professor</Button>
                    ) : (
                        (accType ==='STUDENT') ? (
                        
                            <Button>Aluno</Button>
                        ) : ''
                    )
                }
            </section>

            <Button styleGuide={{
                margin: 'auto'
            }}
            >Cadastrar</Button>
        </form>
    );
}


export default SignupForm;