<script lang="ts">
	import CardInfo from "../shared/components/CardInfo.svelte";
	import { UserLogin } from "./domain/user";

	let isLoading = false;
	let error = "";
	const userLogin = new UserLogin("", "");

	function handleClick() {
		isLoading = true;
		try {
			if (userLogin.verify()) {
				console.log("correct");
			}
		} catch (err) {
			error = err.message;
		} finally {
			isLoading = false;
		}
	}
</script>

<div class="container">
	<form method="post" class="login-form">
		<h1>Login</h1>

		<input
			type="text"
			placeholder="Username"
			bind:value="{userLogin.username}"
		/>
		<input
			type="password"
			placeholder="Password"
			bind:value="{userLogin.password}"
		/>

		<button
			class="btn-success"
			type="submit"
			disabled="{isLoading}"
			on:click|preventDefault="{handleClick}"
		>
			Login
		</button>
	</form>
	{#if error}
		<CardInfo type="DANGER" message="{error}" />
	{/if}
</div>
