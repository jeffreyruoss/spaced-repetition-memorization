<script>
	import { Label, Input, Button } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
	import PageHeading from '$lib/components/PageHeading.svelte';
	import { registerUser } from '$lib/authFunctions';
	import { toast } from '@zerodevx/svelte-toast';
	import { isLoggedIn } from '$lib/authStore';

	let email = '';
	let password = '';
	let isRegistered = false;

	function handleSubmit(event) {
		registerUser(email, password)
			.then(userCredential => {
				isRegistered = true;
			})
			.catch(error => alert(error.message));
	}
</script>

<div>
	<PageHeading>Sign up</PageHeading>
</div>

<div>
	{#if isRegistered}
		<p class="mb-2 text-lg">You are Signed up!</p>
		<Button href="/login" size="lg" class="mb-3 mr-3 pl-3">
			<Icon name="circle-plus-outline" class="w-5 h-5 mr-2" /> 
			Log in
		</Button>
	{:else}
		<form on:submit|preventDefault={handleSubmit} action="#">
			<Label for="email" class="block mb-2">Your Email</Label>
			<Input
				bind:value={email} id="email" size="lg" placeholder="name@example.com" type="email">
				<Icon
					name="envelope-outline"
					slot="left"
					class="ml-1 w-5 h-5 text-gray-500 dark:text-gray-400"
				/>
			</Input>
			<Label for="password" class="block mb-2 mt-4">Password</Label>
			<Input bind:value="{password}" id="password" size="lg" placeholder="mYcoo1Pas$word" type="password">
				<Icon name="lock-outline" slot="left" class="ml-1 w-5 h-5 text-gray-500 dark:text-gray-400" />
			</Input>
			<Button size="lg" class="mt-4" type="submit">Sign up</Button>
		</form>
	{/if}
</div>


<style>
</style>
