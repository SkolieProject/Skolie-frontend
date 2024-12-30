import { BrowserRouter, Routes, Route } from "react-router-dom";




import LoginAndSignIn from "./components/pages/LoginAndSignIn";

function AppRoute( ) {  


  return (
    <BrowserRouter>
      
      <Routes>
      
        <Route
          path="/" 
          element={<LoginAndSignIn></LoginAndSignIn>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
