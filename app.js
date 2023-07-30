import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { firebaseConfig } from './firebaseConfig.js';

import App from './src/App.svelte';

const app = new App({
  target: document.body,
});
export default app;

// Initialize Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app();
// }

// Initialize Firestore through Firebase
// const db = firebase.firestore();

// const registerForm = document.getElementById('register-form');
// registerForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const emailInput = document.getElementById('register-email');
//   const passwordInput = document.getElementById('register-password');
//   const email = emailInput.value;
//   const password = passwordInput.value;

//   firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       // User is signed in
//       var user = userCredential.user;
//       alert("User registered successfully.");
//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       alert(errorMessage);
//     });
// });

// const loginForm = document.getElementById('login-form');
// loginForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const emailInput = document.getElementById('login-email');
//   const passwordInput = document.getElementById('login-password');
//   const email = emailInput.value;
//   const password = passwordInput.value;

//   firebase.auth().signInWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       // User is signed in
//       var user = userCredential.user;
//       alert("User logged in successfully.");
//       const auth = document.getElementById('auth');
//       auth.style.display = 'none';
//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       alert(errorMessage);
//     });
// });


// log out
// const logoutLink = document.getElementById('logout-link');
// logoutLink.addEventListener('click', (e) => {
//   e.preventDefault();
//   firebase.auth().signOut()
//     .then(() => {
//       alert("User signed out successfully.");
//       // #dashboard display none
//       const dashboard = document.getElementById('dashboard');
//       dashboard.style.display = 'none';
//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       alert(errorMessage);
//     });
// });

// check if user is logged in or not
// firebase.auth().onAuthStateChanged((user) => {
//   const loggedInStatus = document.getElementById('logged-in-status');
//   if (user) {
//     loggedInStatus.textContent = `${user.email} is signed in`;
//     const dashboard = document.getElementById('dashboard');
//     dashboard.style.display = 'block';
//     loadExercises();
//   } else {
//     loggedInStatus.textContent = `No user is signed in`;
//     const auth = document.getElementById('auth');
//     auth.style.display = 'block';
//   }
// });