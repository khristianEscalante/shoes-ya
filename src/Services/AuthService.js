import axios from "axios";

class AuthService {
    #urlBase = import.meta.env.VITE_URL_API;
    getHeaders() {
        const token = localStorage.getItem('token');
        return {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        };
    }

    async login(email, password) {
        try {
            const response = await axios.post(`${this.#urlBase}/users/login`, { email, password });
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getInfoUser(id) {
        try {
            const response = await axios.get(`${this.#urlBase}/users/${id}`);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async updateProfile(id, data) {
        try {
            const response = await axios.put(`${this.#urlBase}/users/${id}`, data);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    //est emetodo lleva el token
    async updatePassword(data) {
        try {
            const response = await axios.post(`${this.#urlBase}/users/change-password/`, data, this.getHeaders());
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default new AuthService();
