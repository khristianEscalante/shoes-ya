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
}

export default CategoriesServices;