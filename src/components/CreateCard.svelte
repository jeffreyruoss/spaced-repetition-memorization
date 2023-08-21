<script>
	import firebase from './../firebaseInit.js';
	import { toast } from '@zerodevx/svelte-toast';
	let title = "";
	let content = "";

	function autoExpandTextarea(event) {
		const textarea = event.target;
		textarea.style.height = 'auto';
		textarea.style.height = `${textarea.scrollHeight}px`;
	}

	async function createCard(event) {
		event.preventDefault();

		const button = event.target.querySelector("button");
		button.setAttribute("aria-busy", true);
		button.setAttribute("disabled", true);

		const db = firebase.firestore();
		const user = firebase.auth().currentUser;

		if (!user) {
			alert("Please login to create a flash card.");
			return;
		}

		try {
			await db.collection("cards").add({
				userId: user.uid,
				title: title,
				textContent: content,
				createdDate: firebase.firestore.Timestamp.now(),
				lastReadDate: null
			});
			toast.push('Card created!', {
				theme: {
					'--toastColor': '#fff',
					'--toastBackground': '#38A169',
					'--toastBarBackground': '#2F855A',
				}
			});
			button.removeAttribute("aria-busy");
			button.removeAttribute("disabled");
		} catch (error) {
			toast.push('Failed to create card. Reason: " + error.message', {
				theme: {
					'--toastColor': '#fff',
					'--toastBackground': '#E53E3E',
					'--toastBarBackground': '#C53030'
				}
			});
			button.removeAttribute("aria-busy");
			button.removeAttribute("disabled");
		}
	}
</script>

<div class="container">
	<h2>Create a Flash Card</h2>
	<form on:submit={createCard}>
		<label for="title">Title</label>
		<textarea 
			bind:value={title} 
			on:input={autoExpandTextarea}
			name="title" 
			id="title"
		/>
		<label for="content">Content</label>
		<textarea 
			bind:value={content} 
			on:input={autoExpandTextarea}
			name="content" 
			id="content"
		/>
		<button type="submit">Create</button>
	</form>
</div>

<style>
</style>
