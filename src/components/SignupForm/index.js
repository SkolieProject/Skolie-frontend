import "./index.css";

import { useState } from 'react';

import Button from "../basics/Button";
import TextField from "../basics/TextField";
import Radio from "../basics/Radio";
import Select from "../basics/Select";

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
                        
                        <Select

                            items={[
                                {value: 'MAT', label: 'Matemática'},
                                {value: 'ART', label: 'Artes'},
                                {value: 'ING', label: 'Inglês'},
                                {value: 'QUI', label: 'Química'}
                            ]}
                        >
                        Matéria</Select>
                    ) : (
                        (accType ==='STUDENT') ? (
                        
                            <Select
                            
                            items={[
                                {value: 'EM3A', label: 'Terceiro ano A do ensino médio'},
                                {value: 'EM3B', label: 'Terceiro ano B do ensino médio'},
                                {value: 'EF2A', label: 'Segundo ano A do ensino fundamental'},
                            ]}
                            >
                            Classe</Select>
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