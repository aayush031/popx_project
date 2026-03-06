
import React from "react";
import MobileContainer from "../components/MobileContainer";

function Account(){

const user = JSON.parse(localStorage.getItem("user"));

return(
<MobileContainer>
<h2>Your Profile</h2>
<h3>{user?.name}</h3>
<p>{user?.email}</p>
<p><strong>Phone:</strong> {user?.phone}</p>
<p><strong>Address:</strong> {user?.address}</p>
</MobileContainer>
)
}

export default Account;
