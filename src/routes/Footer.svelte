<script>
	import { Button } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
</script>

<footer>
	<div class="container">
		<Button id="pwa-install-button" color="alternative">
			Install App <Icon name="download-outline" class="w-3.5 h-3.5 ml-2" />
		</Button>
		<p>By <a href="https://jeffruoss.com">Jeff Ruoss</a></p>
	</div>
</footer>

<style>
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
