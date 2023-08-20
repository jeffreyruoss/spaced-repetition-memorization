<script>
	import { loginUser } from './../authFunctions.js';
	let email = '';
	let password = '';
	function login(event) {
			event.preventDefault();
			loginUser(email, password)
					.then(userCredential => {
							alert("User logged in successfully.");
							document.getElementById('auth').style.display = 'none';
					})
					.catch(error => alert(error.message));
	}
</script>

<h1>Login</h1>
<form on:submit={login}>
	<input bind:value={email} type="email" placeholder="Email" />
	<input bind:value={password} type="password" placeholder="Password" />
	<button type="submit">Login</button>
</form>