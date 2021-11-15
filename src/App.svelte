<script lang="ts">
	import { Router, Route, navigate } from "svelte-navigator";
	import Main from "./core/Main.svelte";
	import AppHeader from "./shared/components/AppHeader.svelte";
	import type { UserAuthenticated } from "./user/domain/user";
	import Login from "./user/Login.svelte";
	import SignUp from "./user/SignUp.svelte";

	let user: UserAuthenticated =
		JSON.parse(localStorage.getItem("encryptor_app")) || null;
	if (!user) {
		navigate("/login");
	} else {
		navigate("/");
	}

	function handleUser(event) {
		user = event.detail.user;
		localStorage.setItem("encryptor_app", JSON.stringify(user));
		navigate("/");
	}
</script>

<Router>
	<AppHeader />

	<div class="container">
		<Route path="/">
			<Main userRole="{user.role}" />
		</Route>

		<!-- auth -->
		<Route path="login">
			<Login on:userLoggedIn on:userLoggedIn="{handleUser}" />
		</Route>
		<Route path="signup">
			<SignUp />
		</Route>
	</div>
</Router>
