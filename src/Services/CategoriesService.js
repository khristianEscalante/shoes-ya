import axios from "axios";

class CategoriesServices{

    urlBase = import.meta.env.VITE_URL_API

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
            const response = await axios.post(`${this.urlBase}/categories`, data);
            return response.data
        } catch (error) {
            console.log(error);
        }
    }

    async delete (id){
        try {
            const response = await axios.delete(`${this.urlBase}/categories/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
            
        }
    }

    async update( id, data){
        try {
            const response = await axios.put(`${this.urlBase}/categories/${id}`, data);
            return response.data;
        } catch (error) {
            console.log(error);
            
        }
    }
}

export default CategoriesServices;