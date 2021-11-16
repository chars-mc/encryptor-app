<script lang="ts">
	import { Link } from "svelte-navigator";
</script>

<template>
	<form class="form-auth">
		<h1>SignUp</h1>
		<input type="text" placeholder="Username" />
		<input type="password" placeholder="Password" />
		<input type="password" placeholder="Confirm password" />

		<div>
			<span>Role:</span>
			<input type="radio" name="data_type" value="encryptor" id="text" />
			<label for="text">Encryptor</label>
			<input type="radio" name="data_type" value="decryptor" id="decryptor" />
			<label for="file">Decryptor</label>
		</div>

		<button class="btn-success" type="submit"> Signup </button>

		<p>
			You already have an account? <Link to="/login">Login</Link>
		</p>
	</form>
</template>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	input[type="text"],
	input[type="password"],
	button {
		display: block;
		width: 100%;
	}

	input[type="radio"],
	label {
		display: inline;
	}
</style>
