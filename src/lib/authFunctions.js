import firebase from './firebaseInit.js';

function registerUser(email, password) {
	return firebase.auth().createUserWithEmailAndPassword(email, password);
}

function loginUser(email, password) {
	return firebase.auth().signInWithEmailAndPassword(email, password);
}

function logoutUser() {
	return firebase.auth().signOut();
}

function onAuthStateChanged(callback) {
	return firebase.auth().onAuthStateChanged(callback);
}

export { registerUser, loginUser, logoutUser, onAuthStateChanged };
