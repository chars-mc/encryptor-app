<script lang="ts">
	import { Router } from "svelte-navigator";
	import AppHeader from "./shared/components/AppHeader.svelte";
	import Auth from "./user/Auth.svelte";
</script>

<Router>
	<AppHeader />
	<!-- TODO: change the view if the user is authenticated -->
	<Auth />
</Router>
