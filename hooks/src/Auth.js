import React, { useContext } from "react";
import AuthContext from "./auth-context";

const Auth = () => {

const auth = useContext(AuthContext);
console.log(auth.status);
return (
	<div>
	<h3>(Use Context)Are you authenticated?</h3>
	{auth.status ?

<p>Yes you are</p>

:

<p>Nopes</p>

}

	<button onClick={auth.login}>Click To Login</button>
	</div>
);
};
export default Auth;
