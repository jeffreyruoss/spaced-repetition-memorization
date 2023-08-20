<script>
	import { onAuthStateChanged, logoutUser } from './../authFunctions.js';

	let userStatus = "No user is signed in";

	onAuthStateChanged(user => {
			if (user) {
					userStatus = `${user.email} is signed in`;
			} else {
					userStatus = `No user is signed in`;
			}
	});

	function logout() {
			logoutUser()
					.then(() => alert("User signed out successfully."))
					.catch(error => alert(error.message));
	}
</script>

<p>{userStatus} | <a href="#" on:click|preventDefault={logout}>Logout</a></p>

