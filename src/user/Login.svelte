<script lang="ts">
	import CardInfo from "../shared/components/CardInfo.svelte";
	import Spinner from "../shared/components/Spinner.svelte";
	import { UserAuthenticated, UserLogin } from "./domain/user";
	import { UserRepository } from "./domain/userRepository";
	import { createEventDispatcher } from "svelte";
	import { Link } from "svelte-navigator";

	const dispath = createEventDispatcher();
	let isLoading = false;
	let error = "";
	let promise;
	const userLogin = new UserLogin("", "");
	const userRepository = UserRepository;

	function handleClick() {
		isLoading = true;
		error = "";
		try {
			userLogin.verify();
			promise = userRepository.login(userLogin);
		} catch (err) {
			error = err.message;
		} finally {
			isLoading = false;
		}
	}
	function emitLogin(user: UserAuthenticated) {
		dispath("userLoggedIn", { user });
	}
</script>

<div>
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

		<p>
			Your don't have an account? <Link to="/signup">Signup</Link>
		</p>
	</form>

	{#if error}
		<CardInfo type="DANGER" message="{error}" />
	{/if}

	{#await promise}
		<Spinner />
	{:then user}
		{#if user}
			{emitLogin(user)}
		{/if}
	{:catch error}
		<CardInfo type="DANGER" message="{error.message}" />
	{/await}
</div>
