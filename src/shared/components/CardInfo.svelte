<script lang="ts">
	export let type: "SUCCESS" | "WARNING" | "DANGER";
	export let message: string;
</script>

<template>
	<div class="card card-{type.toLowerCase()}">
		{message}
	</div>
</template>

<style>
	.card {
		max-width: fit-content;
		margin-left: auto;
		margin-right: auto;
		padding: var(--padding);
		text-align: center;
	}

	.card-success {
		color: var(--success-color);
	}

	.card-danger {
		color: var(--danger-color);
	}
</style>
