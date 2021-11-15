import type { UserAuthenticated, UserLogin } from "./user";

// TODO: replace this to an environment variable
const URL_BASE = "http://localhost:8080/user/login";

export const UserRepository = {
	async login(loginRequest: UserLogin): Promise<UserAuthenticated> {
		const response = await fetch(URL_BASE, {
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
};
