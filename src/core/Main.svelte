<script lang="ts">
	import CardInfo from "../shared/components/CardInfo.svelte";
	import Spinner from "../shared/components/Spinner.svelte";
	import type { UserAuthenticated } from "../user/domain/user";

	import { algorithms, DataRequest, dataType } from "./data";
	import { DataRepository } from "./dataRepository";

	let error = "";
	let promise;

	export let user: UserAuthenticated;
	let data: DataRequest = {
		content: "",
		idDataType: 1,
		idAlgorithm: 1,
	};

	function handleClick() {
		error = "";
		try {
			promise = DataRepository.encrypt(data, user.token);
		} catch (err) {
			error = err.message;
		} finally {
		}
	}
</script>

<template>
	<form>
		<div>
			{#each dataType as dataType, i}
				<input
					type="radio"
					name="data_type"
					value="{i + 1}"
					bind:group="{data.idDataType}"
					id="{dataType}"
				/>
				<label for="{dataType}">{dataType}</label>
			{/each}

			<select id="algoithm" bind:value="{data.idAlgorithm}">
				{#each algorithms as algorithm, i}
					<option value="{i + 1}">{algorithm}</option>
				{/each}
			</select>
		</div>

		{#if data.idDataType == 1}
			<input
				type="text"
				bind:value="{data.content}"
				placeholder="Enter text here"
			/>
		{:else}
			<input type="file" placeholder="Select a file" />
		{/if}

		<button
			class="btn btn-success"
			type="submit"
			on:click|preventDefault="{handleClick}"
		>
			{user.role === "Encryptor" ? "Encrypt" : "Decrypt"}
		</button>
	</form>

	{#if error}
		<CardInfo type="DANGER" message="{error}" />
	{/if}

	{#await promise}
		<Spinner />
	{:then response}
		{#if response}
			<div class="result">
				<h4>Result:</h4>

				<p>{response.content}</p>
			</div>
		{/if}
	{:catch error}
		<CardInfo type="DANGER" message="{error.message}" />
	{/await}
</template>

<style scoped>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	input[type="text"],
	input[type="file"],
	button {
		display: block;
		width: 100%;
	}
	label {
		display: inline-block;
		margin-right: var(--padding);
	}

	.result {
		padding: var(--padding);
		border-radius: var(--border-radius);
		background-color: rgba(0, 0, 0, 0.05);
		text-align: center;
		word-wrap: break-word;
	}
</style>
