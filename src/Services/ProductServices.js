import axios from "axios";

class ProductServices{
    
    urlBase='https://retoolapi.dev/bO4vQh'

    async getAll(){
        try {
            const response= await axios.get(`${this.urlBase}/products`)
            console.log(response);
            return response.data
        } catch (error) {
            console.error(error);
        }
    }

    async getById(id){
        try {
            const response= await axios.get(`${this.urlBase}/products/${id}`)
            return response
        } catch (error) {
            console.error(error);
        }
    }

    async delete(id){
        try {
            const response= await axios.delete(`${this.urlBase}/products/${id}`)
            return response.data;
        } catch (error) {
            console.error(error);
            
        }
    }
}

export default ProductServices;