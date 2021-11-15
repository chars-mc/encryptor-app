export class UserLogin {
	constructor(public username: string, public password: string) {}

	public verify(): boolean {
		if (this.username === "" || this.password === "") {
			throw new Error("The username and password cannot be empty");
		}
		if (this.username.length <= 10 || this.username.length > 30) {
			throw new Error(
				"The username and password length must be between 10 and 30 characters",
			);
		}
		return true;
	}
}

export type UserAuthenticated = {
	id: number;
	username: string;
	role: string;
	token: string;
};
