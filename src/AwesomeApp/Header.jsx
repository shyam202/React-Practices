import React, { useState } from 'react';

import logo from "../Images/logo.png";

const Header = () => {
    return <>
       <div className="header">
           <img src={logo} alt="logo" width="150" height="100"></img>
           <h1>Awesome App</h1>
       </div>
    
    </>;
}
 
export default Header;