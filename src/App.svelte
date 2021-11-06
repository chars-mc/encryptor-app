<script lang="ts">
	import { Router, Link, Route } from "svelte-navigator";
	import Login from "./user/Login.svelte";
	import SignUp from "./user/SignUp.svelte";
</script>

<Router>
	<header>
		<nav>
			<Link to="/login">Login</Link>
		</nav>
		<nav>
			<Link to="/signup">Signup</Link>
		</nav>
	</header>

	<Route path="login">
		<Login />
	</Route>
	<Route path="signup">
		<SignUp />
	</Route>
</Router>
