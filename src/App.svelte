<script>
  import { onMount } from 'svelte';
  import { SvelteToast } from '@zerodevx/svelte-toast';
  import './global.css';
  import RegisterForm from './components/RegisterForm.svelte';
  import LoginForm from './components/LoginForm.svelte';
  import UserStatus from './components/UserStatus.svelte';
  import { isLoggedIn } from './stores/authStore.js';
  import Footer from './components/footer/Footer.svelte';
  import CreateCard from './components/CreateCard.svelte';

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

<SvelteToast />

<header>
  <div class="container">
    <h1>Spaced Repetition Memorization</h1>
    <UserStatus />
  </div>
</header>

<main>
  {#if !$isLoggedIn}
    <div class="container">
      <div id="auth">
        <RegisterForm />
        <LoginForm />
      </div>
    </div>
  {/if}
  {#if $isLoggedIn}
    <CreateCard />
  {/if}
</main>

<Footer />

<style>

</style>