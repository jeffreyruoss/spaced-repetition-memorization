<script>
	import '../app.postcss';
	import '@fontsource/titillium-web/300.css';
	import '@fontsource/titillium-web/400.css';
	import '@fontsource/titillium-web/700.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import { isLoggedIn } from '$lib/authStore.js';
	import { onAuthStateChanged } from '$lib/authFunctions.js';

	/**
	 * Set the isLoggedIn store to true or false
	 */
	onAuthStateChanged((user) => {
		if (user) {
			isLoggedIn.set(true);
		} else {
			isLoggedIn.set(false);
		}
	});
</script>

<div class="wrap">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.wrap {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		justify-content: space-between;
	}
	main {
		flex-grow: 1;
	}
</style>