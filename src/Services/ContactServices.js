import axios from "axios";

class ContactsServices{

    urlBase = import.meta.env.VITE_URL_API

   async getAll(){
        try {
            const response= await axios.get(`${this.urlBase}/contacts`)
            return response.data 
        } catch (error) {
            console.error(error);
               
        }
    }


    async getById(id){
        try {
            const response = await axios.get(`${this.urlBase}/contacts/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    async create(data){
        try {
            const response = await axios.post(`${this.urlBase}/contacts`, data);
            return response.data
        } catch (error) {
            console.log(error);
        }
    }

    async delete (id){
        try {
            const response = await axios.delete(`${this.urlBase}/contacts/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
            
        }
    }

    async update( id, data){
        try {
            const response = await axios.put(`${this.urlBase}/contacts/${id}`, data);
            return response.data;
        } catch (error) {
            console.log(error);
            
        }
    }
}

export default new ContactsServices();