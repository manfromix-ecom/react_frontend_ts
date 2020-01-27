import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://yoursite.com/api",
  responseType: "json",
  headers: {
    "Content-Type": "application/json"
  }
});

export const authAPI = {
  me() {
    return apiClient.get(`auth/me`);
  },
  login(email: string, password: string) {
    return apiClient.post(`auth/login`, { email, password});
  },
  logout() {
    return apiClient.delete(`auth/login`);
  },
  resetPassword(email: string) {
    return apiClient.post(`auth/reset`, { email});
  }
}

