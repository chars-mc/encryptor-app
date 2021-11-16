<script lang="ts">
	import { algorithms, DataRequest, dataType } from "./data";

	export let userRole: string;
	let data: DataRequest = {
		content: "",
		idDataType: 1,
		idAlgorithm: 1,
	};
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

		<button class="btn btn-success" type="submit">
			{userRole === "Encryptor" ? "Encrypt" : "Decrypt"}
		</button>
	</form>

	<p class="result">Result</p>
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
		margin: var(--padding);
		padding: var(--padding);
		border-radius: var(--border-radius);
		height: 10rem;
		background-color: rgba(0, 0, 0, 0.05);
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
