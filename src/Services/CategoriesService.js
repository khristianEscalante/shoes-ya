import axios from "axios";

class CategoriesServices{

    urlBase='https://retoolapi.dev/tutpqt'

   async getAll(){
        try {
            const response= await axios.get(`${this.urlBase}/category`)
            return response.data 
        } catch (error) {
            console.error(error);
               
        }
    }
}

export default CategoriesServices;