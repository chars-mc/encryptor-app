<script lang="ts">
	import { Router } from "svelte-navigator";
	import Main from "./core/Main.svelte";
	import AppHeader from "./shared/components/AppHeader.svelte";
	import Auth from "./user/Auth.svelte";
	import type { UserAuthenticated } from "./user/domain/user";

	let user: UserAuthenticated = null;

	function handleUser(event) {
		user = event.detail.user;
	}
</script>

<Router>
	<AppHeader />

	{#if !user}
		<Auth on:userLoggedIn="{handleUser}" />
	{:else}
		<Main userRole="{user.role}" />
	{/if}
</Router>
