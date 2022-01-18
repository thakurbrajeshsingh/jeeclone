import axios from 'axios';



const url = 'http://localhost:8000/';

export const authenticateNewRegister = async (user) => {
    try {
        return await axios.post(`${url}register`,user)
    } catch (error) {
        console.log("Error while calling Register API")
    }
    
    
    
}