<script lang="ts">
	export let userRole: string;
	let dataType = "text";
</script>

<template>
	<form>
		<div>
			<input
				type="radio"
				name="data_type"
				value="text"
				bind:group="{dataType}"
				id="text"
			/>
			<label for="text">Text</label>

			<input
				type="radio"
				name="data_type"
				value="file"
				bind:group="{dataType}"
				id="file"
			/>
			<label for="file">File</label>
		</div>

		{#if dataType === "text"}
			<input type="text" placeholder="Enter text here" />
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
