<script>
	import PageHeading from "$lib/components/PageHeading.svelte";
	import { isLoggedIn } from '$lib/authStore';
	import { Button } from 'flowbite-svelte';
	import { onAuthStateChanged } from '$lib/authFunctions';

	let currentUser;
	onAuthStateChanged((user) => {
		if (user) {
			currentUser = user;
		} else {
		}
	});
</script>

<div>
	<PageHeading>
		Your Flash Cards
	</PageHeading>
</div>

<div>
	{#if !$isLoggedIn}
		<p class="mb-2 text-lg">Log in to view your Flash Cards</p>
		<Button href="/login" size="lg" class="mb-3">
			Log In
		</Button>
	{:else if currentUser}
		cards for {currentUser.email}
		<!-- <FlashCard {card} /> -->
	{/if}
</div>

<style>
</style>
