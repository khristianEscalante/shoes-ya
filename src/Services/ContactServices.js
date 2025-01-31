import axios from "axios";

class ContactsServices{

    urlBase = import.meta.env.VITE_URL_API

    getHeaders() {
        const token = localStorage.getItem('token');
        return {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        };
    }

   async getAll(){
        try {
            const response= await axios.get(`${this.urlBase}/contacts`, this.getHeaders())
            return response.data 
        } catch (error) {
            console.error('Error completo:', error.response || error);
            throw error;
        }
    }
    async getById(id){
        try {
            const response = await axios.get(`${this.urlBase}/contacts/${id}`, this.getHeaders());
            return response.data;
        } catch (error) {
            console.error('Error completo:', error.response || error);
            throw error;
        }
    }

    async create(data){
        try {
            const response = await axios.post(`${this.urlBase}/contacts`, data, this.getHeaders());
            return response.data
        } catch (error) {
            console.error('Error completo:', error.response || error);
            throw error;
        }
    }

    async delete (id){
        try {
            const response = await axios.delete(`${this.urlBase}/contacts/${id}`, this.getHeaders());
            return response.data;
        } catch (error) {
            console.error('Error completo:', error.response || error);
            throw error;
        }
    }

    async update( id, data){
        try {
            const response = await axios.put(`${this.urlBase}/contacts/${id}`, data, this.getHeaders());
            return response.data;
        } catch (error) {
            console.error('Error completo:', error.response || error);
            throw error;
        }
    }
}

export default new ContactsServices();