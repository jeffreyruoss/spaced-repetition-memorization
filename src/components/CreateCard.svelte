<script>
	import firebase from './../firebaseInit.js';  // Assuming you have such a module
	let title = "";
	let content = "";

	async function createCard(event) {
			event.preventDefault();

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
					alert("Card created successfully!");
			} catch (error) {
					console.error("Error creating card:", error.message);
					alert("Failed to create card. Reason: " + error.message);
			}
	}
</script>

<div class="container">
	<h2>Create a Flash Card</h2>
	<form on:submit={createCard}>
			<label for="title">Title</label>
			<textarea bind:value={title} name="title" id="title"></textarea>
			<label for="content">Content</label>
			<textarea bind:value={content} name="content" id="content"></textarea>
			<button type="submit">Create</button>
	</form>
</div>

<style>
</style>
