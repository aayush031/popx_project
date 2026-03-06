
import React from "react";
import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/MobileContainer";

function Welcome() {

const navigate = useNavigate();

return (
<MobileContainer>
<h1>Welcome to PopX</h1>
        <p>   Connect, create, and manage your digital identity easily.      </p>

<button className="primary-btn" onClick={() => navigate("/register")}>
Create Account
</button>

<button className="secondary-btn" onClick={() => navigate("/login")}>
Already Registered? Login
</button>

</MobileContainer>
);
}

export default Welcome;
