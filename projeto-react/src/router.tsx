import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Imc from "./Imc";
import App from "./App";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { App }  path="/" exact />
           <Route component = { Imc }  path="/imc" />
       </BrowserRouter>
   )
}

export default Routes;