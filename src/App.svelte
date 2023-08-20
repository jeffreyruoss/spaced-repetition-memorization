<script>
  import Test from './components/Test.svelte';
  import { onMount } from 'svelte';

  import firebase from 'firebase/compat/app';
  import 'firebase/compat/auth';
  import 'firebase/compat/firestore';
  import { firebaseConfig } from './firebaseConfig.js';

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



    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const emailInput = document.getElementById('register-email');
      const passwordInput = document.getElementById('register-password');
      const email = emailInput.value;
      const password = passwordInput.value;

      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // User is signed in
          var user = userCredential.user;
          alert("User registered successfully.");
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
        });
    });

      const loginForm = document.getElementById('login-form');
      loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const emailInput = document.getElementById('login-email');
        const passwordInput = document.getElementById('login-password');
        const email = emailInput.value;
        const password = passwordInput.value;

        firebase.auth().signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // User is signed in
            var user = userCredential.user;
            alert("User logged in successfully.");
            const auth = document.getElementById('auth');
            auth.style.display = 'none';
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
          });
      });


      // log out
      const logoutLink = document.getElementById('logout-link');
      logoutLink.addEventListener('click', (e) => {
        e.preventDefault();
        firebase.auth().signOut()
          .then(() => {
            alert("User signed out successfully.");
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
          });
      });

      // check if user is logged in or not
      firebase.auth().onAuthStateChanged((user) => {
        const loggedInStatus = document.getElementById('logged-in-status');
        if (user) {
          loggedInStatus.textContent = `${user.email} is signed in`;
        } else {
          loggedInStatus.textContent = `No user is signed in`;
        }
      });




  });

  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
      





</script>

<div class="container">
	<Test />

  <div id="auth">
    <h1>Register</h1>
    <form id="register-form">
      <input type="email" id="register-email" placeholder="Email" />
      <input type="password" id="register-password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>

    <h1>Login</h1>
    <form id="login-form">
      <input type="email" id="login-email" placeholder="Email" />
      <input type="password" id="login-password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>

  <div class="container">
    <h1 id="logged-in-status"></h1>
    <a href="#" id="logout-link">Logout</a>
  </div>
</div>

<style>

</style>