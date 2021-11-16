export type DataRequest = {
	content: string;
	idDataType: number;
	idAlgorithm: number;
};

export const dataType = ["Text", "File"];
export const algorithms = ["AES", "Blowfish"];
