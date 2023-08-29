<script>
	import { onAuthStateChanged, logoutUser } from '$lib/authFunctions.js';
	import { toast } from '@zerodevx/svelte-toast';
	import { isLoggedIn } from '$lib/authStore.js';

	let userStatus = 'No user is signed in';

	onAuthStateChanged((user) => {
		if (user) {
			userStatus = `Signed in as ${user.email}`;
		} else {
			userStatus = `No user is signed in`;
		}
	});

	function logout() {
		logoutUser()
			.then(() => toast.push('You have been logged out'))
			.catch((error) => alert(error.message));
	}
</script>

<div>
	{userStatus}
	{#if $isLoggedIn}
		| <a href="#" on:click|preventDefault={logout}>Logout</a>
	{/if}
</div>
