import type { UserAuthenticated, UserLogin, UserSignUp } from "./user";

// TODO: replace this to an environment variable
const URL_BASE = "http://localhost:8080/user";

export const UserRepository = {
	async login(loginRequest: UserLogin): Promise<UserAuthenticated> {
		const response = await fetch(`${URL_BASE}/login`, {
			method: "POST",
			body: JSON.stringify(loginRequest),
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (!response.ok) {
			const error = JSON.parse(await response.text()).error;
			throw new Error(error);
		}
		const user = await response.json();
		return user;
	},
	async signup(userSignUp: UserSignUp): Promise<UserAuthenticated> {
		const response = await fetch(`${URL_BASE}/signup`, {
			method: "POST",
			body: JSON.stringify(userSignUp),
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (!response.ok) {
			const error = JSON.parse(await response.text()).error;
			throw new Error(error);
		}
		const user = await response.json();
		return user;
	},
};
