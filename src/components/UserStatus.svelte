<script>
	import { onAuthStateChanged, logoutUser } from './../authFunctions.js';
	import { toast } from '@zerodevx/svelte-toast';

	let userStatus = "No user is signed in";
	let isLoggedIn = false;

	onAuthStateChanged(user => {
		if (user) {
			userStatus = `${user.email} is signed in`;
			isLoggedIn = true;
		} else {
			userStatus = `No user is signed in`;
			isLoggedIn = false;
		}
	});

	function logout() {
		logoutUser()
			.then(() => toast.push('You have been logged out'))
			.catch(error => alert(error.message));
	}
</script>

<p>
	{userStatus}
	{#if isLoggedIn}
		 | <a href="#" on:click|preventDefault={logout}>Logout</a>
	{/if}
</p>
