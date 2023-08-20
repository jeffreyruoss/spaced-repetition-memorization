<script>
	import { loginUser } from './../authFunctions.js';
	import { toast } from '@zerodevx/svelte-toast';

	let email = '';
	let password = '';
	function login(event) {
		event.preventDefault();
		loginUser(email, password)
			.then(userCredential => {
				toast.push(`You are logged in as ${email}`);
				document.getElementById('auth').style.display = 'none';
			})
			.catch(error => alert(error.message));
	}
</script>

<h2>Login</h2>
<form on:submit={login}>
	<input bind:value={email} type="email" placeholder="Email" />
	<input bind:value={password} type="password" placeholder="Password" />
	<button type="submit">Login</button>
</form>