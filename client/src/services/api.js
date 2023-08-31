import axios from 'axios'; // iske through api ka call hota h


const API_URL= 'http://localhost:7000';

export const uploadFile = async (data) => {
    try{
        let response = await axios.post(`${API_URL}/upload` , data);
        return response.data;

    }catch (error) {
        console.error('Error while calling the api',error.message);

    }
}




