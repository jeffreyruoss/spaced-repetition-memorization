<script>
  import { onMount } from 'svelte';
  import RegisterForm from './components/RegisterForm.svelte';
  import LoginForm from './components/LoginForm.svelte';
  import UserStatus from './components/UserStatus.svelte';

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

<header>
  <div class="container">
    <h1>Spaced Repetition Memorization</h1>
    <UserStatus />
    <button id="pwa-install-button">Install App</button>
  </div>
</header>

<main>

  <div class="container">
    <div id="auth">
      <RegisterForm />
      <LoginForm />
    </div>
  </div>
</main>

<footer>
  <div class="container">
    By Jeff Ruoss
  </div>
</footer>

<style>

</style>