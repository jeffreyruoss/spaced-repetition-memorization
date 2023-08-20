<script>
	import { onAuthStateChanged, logoutUser } from './../authFunctions.js';
	import { toast } from '@zerodevx/svelte-toast';
	import { isLoggedIn } from './../stores/authStore.js';

	let userStatus = "No user is signed in";

	onAuthStateChanged(user => {
		if (user) {
			userStatus = `Signed in as ${user.email}`;
			isLoggedIn.set(true);
		} else {
			userStatus = `No user is signed in`;
			isLoggedIn.set(false);
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
	{#if $isLoggedIn}
		 | <a href="#" on:click|preventDefault={logout}>Logout</a>
	{/if}
</p>
