import { useState } from "react";

import SwitchFormType from "./components/SwitchFormType";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";

function App( ) {  

  const [formType, setFormType] = useState('login');
  
  const changeFormType = () => {
    if ( formType === 'login' ) {

      setFormType('signup');
      
      return;
    }
    setFormType('login');
  }

  return (
    <div className="App">
      
        <div className={`dualForm ${formType === 'login' ? '' : 'rotate'}`}>
          
          <nav className="switcher">
          
            <SwitchFormType formTypeChanger={() => changeFormType()}></SwitchFormType>
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

export default App;
