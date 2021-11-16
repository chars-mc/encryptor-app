import snakecaseKeys from "snakecase-keys";
import type { DataRequest, DataResponse } from "./data";

const URL_BASE = "http://localhost:8080/encrypt";

export const DataRepository = {
	async encrypt(data: DataRequest, token: string): Promise<DataResponse> {
		const response = await fetch(URL_BASE, {
			method: "POST",
			body: JSON.stringify(snakecaseKeys(data)),
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
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
