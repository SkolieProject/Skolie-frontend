import { useState } from "react";

import SwitchFormType from "../../SwitchFormType";
import SignupForm from "../../SignupForm";
import LoginForm from "../../LoginForm";


const LoginAndSignIn = (props) => {
    const [formType, setFormType] = useState('login');

    const changeFormType = () => {
        if ( formType === 'login' ) {

        setFormType('signup');
        
        return;
        }
    setFormType('login');
    }

    
    return (
        <div className="AppRoute">
      
        <div className={`dualForm ${formType === 'login' ? '' : 'rotate'}`}>
          
          <nav className="switcher">
          
            <SwitchFormType styleGuide={{backgroundColor : 'blue'}} formTypeChanger={() => changeFormType()}></SwitchFormType>
          </nav>
          
          <section className="choiceForm">
          
            {(formType === 'login') ? (
              <LoginForm></LoginForm>
            ) : (
              <SignupForm></SignupForm>
            )}
          </section>
        </div>
    </div>



    );
}



export default LoginAndSignIn;