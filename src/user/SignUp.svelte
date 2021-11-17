<script lang="ts">
	import { createEventDispatcher } from "svelte";

	import { Link } from "svelte-navigator";
	import CardInfo from "../shared/components/CardInfo.svelte";
	import Spinner from "../shared/components/Spinner.svelte";
	import { UserAuthenticated, UserSignUp } from "./domain/user";
	import { UserRepository } from "./domain/userRepository";

	const dispath = createEventDispatcher();
	let isLoading = false;
	let error = "";
	let promise;
	const userSignUp = new UserSignUp("", "", 1);
	const userRepository = UserRepository;

	function handleClick() {
		isLoading = true;
		error = "";
		try {
			userSignUp.verify();
			promise = userRepository.signup(userSignUp);
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

<template>
	<form class="form-auth">
		<h1>SignUp</h1>
		<input
			type="text"
			placeholder="Username"
			bind:value="{userSignUp.username}"
		/>
		<input
			type="password"
			placeholder="Password"
			bind:value="{userSignUp.password}"
		/>

		<div>
			<span>Role:</span>
			<input
				type="radio"
				name="data_type"
				value="{1 + 0}"
				id="text"
				bind:group="{userSignUp.role}"
			/>
			<label for="text">Encryptor</label>
			<input
				type="radio"
				name="data_type"
				value="{2 + 0}"
				id="decryptor"
				bind:group="{userSignUp.role}"
			/>
			<label for="file">Decryptor</label>
		</div>

		<button
			class="btn-success"
			type="submit"
			on:click|preventDefault="{handleClick}"
		>
			Signup
		</button>

		<p>
			You already have an account? <Link to="/login">Login</Link>
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
