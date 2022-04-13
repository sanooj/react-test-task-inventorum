import { baseUrl } from "./config";

// Get
const get = (apiEndPoint:string) => {
  return fetch(`${baseUrl}${apiEndPoint}`)
		.then((res) => res.json())
		.then(
			(result) => {
				return result;
			},
			(error) => {
				return error;
			}
		);
}

// Post
const post = (apiEndPoint: string, payload: any) => {
	return fetch(`${baseUrl}${apiEndPoint}`, {
		method: "POST",
		body: payload,
	})
		.then((res) => res.json())
		.then(
			(result) => {
				return result;
			},
			(error) => {
				return error;
			}
		);
};

// Put
const put = (apiEndPoint: string, payload: any) => {
	return fetch(`${baseUrl}${apiEndPoint}`, {
		method: "PUT",
		body: payload,
	})
		.then((res) => res.json())
		.then(
			(result) => {
				return result;
			},
			(error) => {
				return error;
			}
		);
};

// Delete
const _delete = (apiEndPoint: string) => {
	return fetch(`${baseUrl}${apiEndPoint}`, {
		method: "DELETE",
	})
		.then((res) => res.json())
		.then(
			(result) => {
				return result;
			},
			(error) => {
				return error;
			}
		);
};

// Patch
const patch = (apiEndPoint: string, payload: any) => {
	return fetch(`${baseUrl}${apiEndPoint}`, {
		method: "PATCH",
		body: payload,
	});
};

export const api = {
	get,
	post,
	put,
	delete: _delete,
	patch,
};