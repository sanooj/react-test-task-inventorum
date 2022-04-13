import { api } from "api/api";



const getUserData = async (apiEndPoint:string) => {
	return await api.get(apiEndPoint);
}

const patchUserData = async (apiEndPoint:string, payload: any) => {
	return await api.patch(apiEndPoint, payload);
}

export const services = {
	getUserData,
	patchUserData,
};