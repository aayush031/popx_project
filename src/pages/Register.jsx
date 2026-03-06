
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/MobileContainer";

function Register(){

const navigate = useNavigate();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [phone,setPhone] = useState("");
const [password,setPassword] = useState("");
const [address,setAddress] = useState("");

const handleSubmit = () => {
const user = {name,email,phone,password,address};
localStorage.setItem("user",JSON.stringify(user));
navigate("/account");
};

return(
<MobileContainer>
<h2>Create your PopX account</h2>

<input placeholder="Full Name" onChange={(e)=>setName(e.target.value)}/>
<input placeholder="Phone number" onChange={(e)=>setPhone(e.target.value)}/>
<input placeholder="Email address" onChange={(e)=>setEmail(e.target.value)}/>
<input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
<input placeholder="Address" onChange={(e)=>setAddress(e.target.value)}/>


<button className="primary-btn" onClick={handleSubmit}>
Create Account
</button>

</MobileContainer>
)
}

export default Register;
