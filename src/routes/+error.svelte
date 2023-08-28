<script>
	import { error } from '@sveltejs/kit'

	export function load() {
		throw error(420, 'Enhance your calm');
	}

	console.log(error);

</script>

<div>
	<h1>404</h1>
</div>