<script>
	import { registerUser } from './../authFunctions.js';
	let email = '';
	let password = '';
	function register(event) {
			event.preventDefault();
			registerUser(email, password)
					.then(userCredential => alert("User registered successfully."))
					.catch(error => alert(error.message));
	}
</script>

<h2>Register</h2>
<form on:submit={register}>
	<input bind:value={email} type="email" placeholder="Email" />
	<input bind:value={password} type="password" placeholder="Password" />
	<button type="submit">Register</button>
</form>
