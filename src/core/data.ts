export type DataRequest = {
	content: string;
	idDataType: number;
	idAlgorithm: number;
};

export type DataResponse = {
	id: number;
	content: string;
};

export const dataType = ["Text", "File"];
export const algorithms = ["AES", "Blowfish"];
