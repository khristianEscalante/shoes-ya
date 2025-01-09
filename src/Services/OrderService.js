import axios from "axios";

class ProductServices{
    
    urlBase = import.meta.env.VITE_URL_API

    async addOrder(data){
        try {
            const response= await axios.post(`${this.urlBase}/orders`, data)
            return response.data
        } catch (error) {
            console.error(error);
        }
    }

}

export default ProductServices;