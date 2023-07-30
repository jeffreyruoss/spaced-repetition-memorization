<script>
import Test from './components/Test.svelte';
import { onMount } from 'svelte';

onMount(async () => {
  if ('serviceWorker' in navigator) {
    const swURL = import.meta.env.MODE === 'development' ? '/sw.dev.js' : '/sw.js';
    try {
      const registration = await navigator.serviceWorker.register(swURL);
      console.log('Service Worker Registered:', registration);
    } catch (registrationError) {
      console.log('Service Worker Registration Failed:', registrationError);
    }
  } else {
    console.log('Service Worker is not supported in this browser');
  }
});

</script>

<div class="container">
	<Test />
</div>