import axios from "axios";

class CategoriesServices{

    urlBase = import.meta.env.VITE_URL_API

    // Configuración del header con el token
    getHeaders() {
        const token = localStorage.getItem('token');
        console.log('Token recuperado:', token); // Debug log
        const headers = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        };
        console.log('Headers configurados:', headers); // Debug log
        return headers;
    }

   async getAll(){
        try {
            const response= await axios.get(`${this.urlBase}/categories`)
            return response.data 
        } catch (error) {
            console.error(error);
               
        }
    }


    async getById(id){
        try {
            const response = await axios.get(`${this.urlBase}/categories/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    async create(data){
        try {
            const headers = this.getHeaders();
            console.log('Enviando petición con headers:', headers); // Debug log
            const response = await axios.post(
                `${this.urlBase}/categories`, 
                data,
                headers
            );
            return response.data
        } catch (error) {
            console.error('Error completo:', error.response || error);
            throw error;
        }
    }

    async delete (id){
        try {
            const headers = this.getHeaders();
            console.log('Enviando petición con headers:', headers); // Debug log
            const response = await axios.delete(
                `${this.urlBase}/categories/${id}`,
                headers
            );
            return response.data;
        } catch (error) {
            console.error('Error completo:', error.response || error);
            throw error;
        }
    }

    async update( id, data){
        try {
            const headers = this.getHeaders();
            console.log('Enviando petición con headers:', headers); // Debug log
            const response = await axios.put(
                `${this.urlBase}/categories/${id}`, 
                data,
                headers
            );
            return response.data;
        } catch (error) {
            console.error('Error completo:', error.response || error);
            throw error;
        }
    }
}

export default CategoriesServices;