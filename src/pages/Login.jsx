
import React from "react";
import MobileContainer from "../components/MobileContainer";

function Login(){
return(
<MobileContainer>
<h2>Signin to your PopX account</h2>
<input placeholder="Email address" />
<input type="password" placeholder="Password" />
<button className="primary-btn">Login</button>
</MobileContainer>
)
}

export default Login;
