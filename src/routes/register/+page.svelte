<script>
	import { Label, Input, Button } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
	import Heading from '$lib/components/PageHeading.svelte';
</script>

<div>
	<Heading>Sign up</Heading>
</div>

<div>
	<Label for="email" class="block mb-2">Your Email</Label>
	<Input id="email" size="lg" placeholder="name@example.com" type="email">
		<Icon
			name="envelope-outline"
			slot="left"
			class="ml-1 w-5 h-5 text-gray-500 dark:text-gray-400"
		/>
	</Input>
	<Label for="password" class="block mb-2 mt-4">Password</Label>
	<Input id="password" size="lg" placeholder="mYcoo1Pas$word" type="password">
		<Icon name="lock-outline" slot="left" class="ml-1 w-5 h-5 text-gray-500 dark:text-gray-400" />
	</Input>
	<Button size="lg" class="mt-4">Sign up</Button>
</div>

<style>
</style>
