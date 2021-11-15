<script lang="ts">
	import CardInfo from "../shared/components/CardInfo.svelte";

	export let userRole: string;
</script>

<template>
	{#if userRole == "Encryptor"}
		<h1>Encryptor</h1>
	{:else if userRole == "Decryptor"}
		<h1>Decryptor</h1>
	{:else}
		<CardInfo type="DANGER" message="User role unknown" />
	{/if}
</template>
