import axios from "axios";

class ProductServices{
    
    urlBase = import.meta.env.VITE_URL_API

    getHeaders(){
        const token = localStorage.getItem('token');
        const headers = {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        };
        return headers;
    }

    async getAll(){
        try {
            const response= await axios.get(`${this.urlBase}/products`)
            return response.data
        } catch (error) {
            console.error(error);
        }
    }

    async create(data){
        try {
            const response= await axios.post(`${this.urlBase}/products`, data, this.getHeaders())
            return response.data
        } catch (error) {
            console.error(error);
        }
    }

    async getById(id){
        try {
            const response= await axios.get(`${this.urlBase}/products/${id}`)
            return response.data
        } catch (error) {
            console.error(error);
        }
    }

    async delete(id){
        try {
            const response= await axios.delete(`${this.urlBase}/products/${id}`, this.getHeaders())
            return response.data;
        } catch (error) {
            console.error(error);
            
        }
    }

    async update(id, data){
        try {
            const response= await axios.put(`${this.urlBase}/products/${id}`, data, this.getHeaders())
            return response.data
        } catch (error) {
            console.error(error);
        }
    }
}

export default ProductServices;