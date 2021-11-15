<script>
	import { Link, Route } from "svelte-navigator";
	import Login from "./Login.svelte";
	import SignUp from "./SignUp.svelte";
</script>

<div>
	<nav>
		<Link to="/login">Login</Link>
		<Link to="/signup">Signup</Link>
	</nav>

	<Route path="login">
		<Login />
	</Route>
	<Route path="signup">
		<SignUp />
	</Route>
</div>
