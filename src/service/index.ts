import axios, { type AxiosInstance } from "axios";

export const AXIOS: AxiosInstance = axios.create({
    baseURL: "http://localhost:3000"
}) 